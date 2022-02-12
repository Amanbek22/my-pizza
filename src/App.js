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
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzaAsync, getAllPizzas } from './reudx/actions/pizzaActions.js';
import Api from "./api/Api.js"
import Preloader from './componets/preloader/Preloader.jsx';

function App() {
  const authData = useSelector((state) => state.auth.data)
  const basketData = useSelector((state) => state.basket.data)
  const { isLoading, data } = useSelector((state) => state.pizza);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPizzaAsync())
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketData))
  }, [basketData])

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(authData))
  }, [authData])

  if(isLoading) {
    return <Preloader />
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Navbar />
          <Main />
        </Route>
        <Route path="/contacts">
          <Header />
          <Navbar />
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