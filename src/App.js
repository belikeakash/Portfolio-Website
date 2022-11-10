import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Head from "./components/Head";
import Header from "./components/Header";
import Project from "./components/Projects";
import Me from "./components/Me";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/contact">
            <Header />
            <Contact />
          </Route>
                <Route path="/about">
            <Header />
            <Me />
          </Route>
          <Route path="/projects">
            <Header />
            <Project />
          </Route>
          <Route path="/">
            <Header />
            <Head />
            <Skills />
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


//service_ez5799d