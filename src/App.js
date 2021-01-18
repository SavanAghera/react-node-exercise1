import { useState } from "react";
import styles from "./App.module.css";
import bootstrap from "./bootstrap.module.css";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Nav from './components/Navbar';
import Time from './components/Time';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function useMergeState(initialState) {
  const [state, setState] = useState(initialState);
  const setMergedState = (newState) =>
    setState((prevState) => Object.assign({}, prevState, newState));
  return [state, setMergedState];
}

function App() {
  return (
    <Router className={[styles.app, bootstrap.container]}>
      <Time/>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/Login" exact component={Login} />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <h1>Welcome to home</h1>
  )
}
export default App;
