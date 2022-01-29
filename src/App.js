import { useEffect, useState } from 'react';
import './App.css';
import Header from './componets/header/Header.jsx';
import Navbar from './componets/navbar/Navbar.jsx';
import {
  Switch,
  Route,
} from "react-router-dom";
import Main from './pages/main/Main.jsx';
import Contacts from './pages/Contacts.jsx';
import Admin from './pages/admin/Admin.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import PublicRoute from './route/PublicRoute.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';

function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("auth")) || null);
  
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuth))
  }, [isAuth])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Navbar basket={basket} />
          <Main setBasket={setBasket} />
        </Route>
        <Route path="/contacts">
          <Header />
          <Navbar basket={basket} />
          <Contacts />
        </Route>
        <PublicRoute path="/admin" auth={isAuth} component={() => <Admin setIsAuth={setIsAuth} />} />
        {/* <Route path="/admin">
          <Admin setIsAuth={setIsAuth} />
        </Route> */}
        <PrivateRoute path="/dashboard" auth={isAuth} component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;



function f(a) {
  console.log(a);
}


f(5)