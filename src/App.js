import { useState } from 'react';
import './App.css';
import Header from './componets/header/Header.jsx';
import Navbar from './componets/navbar/Navbar.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './pages/main/Main.jsx';
import Contacts from './pages/Contacts.jsx';
import Admin from './pages/admin/Admin.jsx';

function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])
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
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/dashboard">
          Dashboard
        </Route>
      </Switch>
    </div>
  );
}

export default App;
