import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/dataRequestsWithAPI/Home";
import FilmDetails from "./components/dataRequestsWithAPI/FilmDetails";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<FilmDetails />} />

          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
