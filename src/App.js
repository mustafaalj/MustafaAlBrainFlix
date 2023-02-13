import "./App.scss";
import Nav from "./components/Nav/Nav";
// import Rampage from "./components/Rampage/Rampage";
// import Comment from "./components/Comment/Comment";
// import CommentBox from "./components/Comment/CommentBox";
import VideoStructure from "./components/Video/VideoStructure";
// import VideoData from "./data/videos.json";
// import SideVideo from "./components/Video/SideVideo";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Rampage /> */}
      <VideoStructure />
      {/* <SideVideo /> */}
      {/* <CommentBox /> */}
    </div>
  );
}

export default App;
