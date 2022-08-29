import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/dataRequestsWithExpressBackend/Home";
import EditDog from "./components/dataRequestsWithExpressBackend/EditDog";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dog/:id" element={<EditDog />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
