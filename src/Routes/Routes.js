import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Login from "../Components/Login/Login";

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Routing;

