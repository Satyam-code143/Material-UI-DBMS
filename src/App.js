import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './All Components/Home/Home';
import Login from './All Components/Home/Login';
import AdminPage from './All Components/AdminPage/AdminPage';
import Showroom from './All Components/AdminPage/Components/Showroom';


function App() {
  return (
    <Router>
      <Switch>
        {/* <Home>
          <Route exact path="/" component={Home}/>
        </Home> */}
          <Route exact path="/" component={AdminPage}/>
          <Route path="/Showroom" component={Showroom}/>
      </Switch>
      
      
    </Router>
  );
}

export default App;
