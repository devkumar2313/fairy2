import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import MainView from "./components/Mainview";
import Viewdetails from "./components/Viewdetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<MainView />}></Route>
          <Route path="/detail" element={<Viewdetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
