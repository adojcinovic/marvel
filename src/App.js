import './App.scss';
import { MainPage } from './MainPage/MainPage'
import { SingleCharacter } from './SingleCharacter/SingleCharacter'
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
function App() {





  return (

    <div className="App">
      <Switch>
        <Route path='/' exact component={MainPage}></Route>
        <Route path='/single-character/:id' component={SingleCharacter}></Route>
      </Switch>
    </div>
  );
}

export default App;
