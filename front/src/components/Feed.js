import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import axios from "../axios";
import Pusher from "pusher-js";

const pusher = new Pusher("60c953e50b43a7e0cb6a", {
  cluster: "us2",
});

function Feed() {
  const [posts, setPosts] = useState([]);

  const syncFeed = () => {
    axios.get("/retrieve/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  };

  useEffect(() => {
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      syncFeed();
    });
  });

  useEffect(() => {
    syncFeed();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post._id}
          message={post.text}
          timestamp={post.timestamp}
          username={post.user}
          imgName={post.imgName}
          profilePic={post.avatar}
        />
      ))}
    </div>
  );
}

export default Feed;
