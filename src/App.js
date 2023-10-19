import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FilmList from "./components/FilmList";
import ThemeProvider from "./components/Toggle";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <FilmList></FilmList>
      <Footer></Footer>
    </div>
  );
}

export default App;
