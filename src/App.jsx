import "./App.css";
import Home from "./pages/Home";
import Summary from "./pages/Summary";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Summary/>} path="shows/:showId"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
