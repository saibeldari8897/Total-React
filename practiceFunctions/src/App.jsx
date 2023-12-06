import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="Post">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
