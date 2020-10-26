import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Dining from './pages/Dining';
import SingleRoom from './pages/SingleRoom';
import SingleDining from './pages/SingleDining';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';


function App() {
  return <>
  <Navbar />   
  
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/rooms" component={Rooms} />
  <Route exact path="/dining" component={Dining} />
  <Route exact path="/dining/:myform" component=
  {SingleDining} />
  <Route exact path="/rooms/:reformed" component=
  {SingleRoom} />
  <Route component={Error} />
  </Switch>
  
    </>; 
}

export default App;


 