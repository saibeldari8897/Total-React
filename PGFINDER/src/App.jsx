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

  // Function to render the selected tab's component
  const renderSelectedTab = () => {
    switch (selectedTab) {
      case "Home":
        return <Pglist />;
      case "Create NewPg":
        return <CreatePg />;
      case "DeletePg":
        return <DeletePg />;
      default:
        return <Pglist />;
    }
  };

  return (
    <div className="container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="con2">
        <Header />
        {renderSelectedTab()}
        <Footer />
      </div>
    </div>
  );
}

export default App;
