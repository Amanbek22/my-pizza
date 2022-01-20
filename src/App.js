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

function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar basket={basket} />

        <Switch>
          <Route exact path="/">
            <Main setBasket={setBasket} />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
