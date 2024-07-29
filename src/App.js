import "./App.css";
import {  } from "react-router-dom";
import Topbar from "./pages/Topbar";
import Monitor from "./pages/Monitor";
import Sidebar from "./pages/Sidebar"

function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <Topbar />
        <Monitor />
      </div>
    </div>
  );
}

export default App;
