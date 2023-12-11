import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import Footer from "./components/footer";
import Post from "./components/Post";
import PostListItemsContainer from "./components/postListItemsContainer";
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
