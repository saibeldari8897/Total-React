import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import PostListItemsContainer from "../components/postListItemsContainer";
import Post from "../components/Post";
import PostListProvider from "./store/postlist-store";
import { useState } from "react";
function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="App">
        <Sidebar
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
        ></Sidebar>
        <div className="Post">
          <Header></Header>
          {selectedTab === "Home" ? <PostListItemsContainer /> : <Post />}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
