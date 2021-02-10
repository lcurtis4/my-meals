import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
    return (
        <ul className="navbar">
        <li className="navbar_item1 active">
            <Link className="navbar__link" to="/meals">
            {" "}
            My Meals{" "}
            </Link>
        </li>
        <li className="navbar_item2">
            <Link className="navbar__link" to="/specials">
            {" "}
            Today's Specials{" "}
            </Link>
        </li>
        </ul>
    );
};
