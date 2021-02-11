import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MealContext } from "./MealProvider";

//HTML Representation of a meal. This is being called on "/meals"
export const MealCard = ({ meal, showButton }) => {
    const history = useHistory();
    const { dltMeal } = useContext(MealContext);

    const handleDlt = () => {
        dltMeal(meal.id).then(() => {
        history.push("/meals");
        });
    };

    return (
        <section className="meal">
        <div className="mainDish">Name: {meal.name}</div>
        <div className="mainDish">Main Dish: {meal.mainDish}</div>
        <div className="mainDish">Side Dish: {meal.sideDish}</div>
        <div className="mainDish">Beverage: {meal.bev}</div>
        {showButton ?
<button onClick={handleDlt}> Delete Meal </button>
    : null}        </section>
    );
};
