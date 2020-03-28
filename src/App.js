import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='bakck'>
          <img className='biro' src='./biro.svg' alt='' />
          <>
            <Switch>
              <Route path='/' exact>
                <Background />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
            </Switch>
          </>

          <div className='design pos-abs'>
            <img src='./designer.svg' className='designer' alt='' />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
