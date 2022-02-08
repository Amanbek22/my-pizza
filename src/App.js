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
import { useSelector } from 'react-redux';


function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])
  const authData = useSelector((state) => state.auth.data)

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(authData))
  }, [authData])

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
        <PublicRoute
          path="/admin"
          component={Admin} 
        />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
        />
      </Switch>
    </div>
  );
}

export default App;



function f(a) {
  console.log(a);
}


f(5)