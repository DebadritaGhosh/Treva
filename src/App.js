import React from 'react';
import { Route, Switch } from 'react-router-dom';
//importing Style(GLOBAL)
import './App.css';
//importing Components
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
// importing Screens
import Home from './Screens/Home';
import Holidays from './Screens/Holidays';
import Contact from './Screens/Contact';
import Error from './Screens/Error';

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/holidays" component={Holidays} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
