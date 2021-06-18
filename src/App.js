
// npm i prop-types
import React from 'react';
import {HashRouter, Route} from "react-router-dom"; //you can use BrowserRouter
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from './components/Navigation';
import "./App.css";
import Movie_detail from './routes/movie-detail';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas)

function App(){
  return( 
  <HashRouter>
    <Navigation />
    <Route path="/detail/:id" component={Movie_detail} />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
  )
}

export default App;