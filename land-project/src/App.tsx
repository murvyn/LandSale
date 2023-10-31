import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Find from "./routes/Find";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Find />} />
      </Routes>
    </>
  );
}

export default App;
