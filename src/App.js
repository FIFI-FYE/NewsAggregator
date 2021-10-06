import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import User from './pages/User';
// import navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
   <Router>
     
      <Switch>
       <Route path="/" exact><Home />Home</Route>
       <Route path="/:id"> <User/> User</Route>
       {/* <Route path="/"> <navbar/> </Route> */}
       

      </Switch>
    </Router>
  );
}

const state =() =>{
  
}


export default App;




// <Route path="/Login" component={Login} />
//        <Route path="/dashboard" component={dashboard} />
//        <Route path="/" component={NotFound} />
