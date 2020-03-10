import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='bakck'>
          <img className='biro' src='./biro.svg' alt='' />
          <div className='bg'>
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
            </Switch>
          </div>

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