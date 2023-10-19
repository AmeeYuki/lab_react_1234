import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FilmList from "./components/FilmList";
import ThemeProvider from "./components/Toggle";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import News from "./components/News";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<FilmList />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/news" element={<News />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
