import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import CreatePg from "./components/createpg";
import Sidebar from "./components/sidebar";
import Pglist from "./components/Pglist";
import { useState } from "react";
import DeletePg from "./components/deletePg";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <div className="container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="con2">
          <Header></Header>
          {selectedTab === "Home" ? (
            <Pglist />
          ) : selectedTab === "Create NewPg" ? (
            <CreatePg />
          ) : (
            <DeletePg />
          )}

          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
