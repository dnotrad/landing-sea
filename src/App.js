import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Seaman from "./components/Seaman/Seaman";
import Shipowners from "./components/Shipowners/Shipowners";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/shipowners" component={Shipowners} />
        <Route path="/seaman" component={Seaman} />
        <Redirect to="/" />
      </Switch>
      <Header footer={true} />
    </div>
  );
}

export default App;
