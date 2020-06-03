import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AllBeers from './views/AllBeers';
import Home from './views/Home';
import RandomBeer from './views/RandomBeer';
import SingleBeer from './views/SingleBeer';
import CreateBeer from './views/CreateBeer';

import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/beers' component={AllBeers}/>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={CreateBeer}/>
          <Route path='/:id' component={SingleBeer}/>
          <Route path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
