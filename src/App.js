import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Sidebar from "./layout/Sidebar";
import "./layout/layout.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import AppLayoutRoute from "./components/Applayout";

import CrudOperations from "./pages/Cruds";
import CardType2 from "./components/CradType2/CardType2";
import TableData from "./components/table/Table";
import Profile from "./pages/Profile/profile";
import Admin from "./pages/admin";
import Table2 from "./pages/table/exmpleTable";
import SetPassword from "./pages/SetPassword/SetPassword";
import MyChart from "./pages/Charts/chart";
import PageNotFound from "./pages/PageNotFound";

class App extends React.Component {
  render() {
    return (
      <>
        {" "}
        <Switch>
          <div>
            <div className="container-fluid admin-fluid">
              <div className="row" style={{ display: "contents" }}>
                <Route exact path="/" component={LoginPage} />
                <AppLayoutRoute path="/profile" component={Profile} />
                <AppLayoutRoute path="/restdata" component={TableData} />
                <AppLayoutRoute exact path="/home" component={Home} />
                <AppLayoutRoute path="/crud" component={CrudOperations} />
                <AppLayoutRoute path="/info" component={Admin} />
                <AppLayoutRoute path="/settings" component={SetPassword} />
                <AppLayoutRoute path="/charts" component={MyChart} />
                <AppLayoutRoute path="/component-5" component={LoginPage} />
                <AppLayoutRoute path="/component-6" component={LoginPage} />
                <Redirect path="*" component={PageNotFound} />
              </div>
            </div>
          </div>
        </Switch>
      </>
    );
  }
}

export default App;
