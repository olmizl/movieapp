import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Detail from "./components/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
