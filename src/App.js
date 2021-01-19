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
import Profile from "./pages/profile";
import Admin from "./pages/admin";
import Table2 from "./pages/table/exmpleTable";
import SetPassword from "./pages/SetPassword/SetPassword";

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
                <AppLayoutRoute
                  path="/component-1"
                  component={CrudOperations}
                />
                <AppLayoutRoute path="/api_data" component={TableData} />
                <AppLayoutRoute path="/component-5" component={Admin} />
                <AppLayoutRoute path="/profile" component={Admin} />
                <AppLayoutRoute path="/home" component={Home} />
                {/* <AppLayoutRoute  path='/user/taniarascia' component={User} /> */}
                <AppLayoutRoute path="/user/taniarascia" component={Table2} />
                <AppLayoutRoute path="/settings" component={SetPassword} />
                <Redirect path="*" component={LoginPage} />
              </div>
            </div>
          </div>
        </Switch>
      </>
    );
  }
}

export default App;
