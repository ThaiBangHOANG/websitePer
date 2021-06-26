import "./App.scss";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Portfolio from "./Pages/Portfolio";
import HobbiesPage from "./Pages/HobbiesPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>
            <Route path="/hobbies" exact>
              <HobbiesPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
