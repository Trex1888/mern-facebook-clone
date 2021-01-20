import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config.js";
import multer from "multer";
import GridFsStorage from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import bodyParser from "body-parser";
import path from "path";
import Pusher from "pusher";
import mongoPosts from "./mongoData.js";

Grid.mongo = mongoose.mongo;

//app config
const app = express();
const port = process.env.PORT || 9000;

const secretURL = config.SECRET_KEY;
const pusher = new Pusher({
  appId: "1135978",
  key: "60c953e50b43a7e0cb6a",
  secret: secretURL,
  cluster: "us2",
  useTLS: true,
});

//middleware
app.use(bodyParser.json());
app.use(cors());

// db config
const connect_url = config.MONGODB_URL;

const conn = mongoose.createConnection(connect_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect(connect_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB1");

  const changeStream = mongoose.connection.collection("messages").watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      console.log("Triggering Pusher");
      pusher.trigger("messages", "inserted", {
        change: change,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

let gfs;

conn.once("open", () => {
  console.log("connected to mongoDB");

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("images");
});

const storage = new GridFsStorage({
  url: connect_url,

  file: (req, file) => {
    return new Promise((resolve, reject) => {
      {
        const filename = `image-${Date.now()}${path.extname(
          file.originalname
        )}`;

        const fileInfo = {
          filename: filename,
          bucketName: "images",
        };
        resolve(fileInfo);
      }
    });
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => res.status(200).send("mern fbook clone"));

app.post("/upload/image", upload.single("file"), (req, res) =>
  res.status(201).send(req.file)
);

app.post("/upload/post", (req, res) => {
  const dbPost = req.body;

  console.log(dbPost);

  mongoPosts.create(dbPost, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/retrieve/image/single", (req, res) => {
  gfs.files.findOne({ filename: req.query.name }, (err, file) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!file || file.length === 0) {
        res.status(404).json({ err: "file not found" });
      } else {
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      }
    }
  });
});

app.get("/retrieve/posts", (req, res) => {
  mongoPosts.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(data);
      data.sort((b, a) => a.timestamp - b.timestamp);
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`listening on localhost:${port}`));
