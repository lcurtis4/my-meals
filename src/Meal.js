import React from "react";
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register"
import "./Meal.css";

export const Meal = () => ( 
    <>
    <Route
        render={() => {
        if (localStorage.getItem("meal_user")) {
            return (
            
            <ApplicationViews />
            
            );
        } else {
            return <Redirect to="/login" />;
        }
        }}
    />

    <Route path="/login">
        <Login />
    </Route>
    <Route path="/register">
        <Register />
    </Route>
    </>
);