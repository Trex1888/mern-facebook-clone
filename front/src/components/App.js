import "../styles/App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import { useStateValue } from "../StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

// return (
//   <div className="app">
//     {!user ? (
//       <Login />
//     ) : (
//       <>
//         <Header />
//         <div className="app__body">
//           <Sidebar />
//           <Feed />
//           <Widgets />
//         </div>
//       </>
//     )}
//   </div>
// );
// }
