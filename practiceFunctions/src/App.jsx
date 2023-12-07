import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Post from "../components/Post";
import CreatePost from "../components/createPost";
import { useState } from "react";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <div className="App">
      <Sidebar
        selectedTab={selectedTab}
        setselectedTab={setselectedTab}
      ></Sidebar>
      <div className="Post">
        <Header></Header>
        {selectedTab === "Home" ? <CreatePost /> : <Post></Post>}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
