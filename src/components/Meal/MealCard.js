import React from "react"

export const MealCard = ({ meal }) => (
    <section className="meal">
            <div className="mainDish">Name: {meal.name}</div>
            <div className="mealType">Type: {meal.mealTypeId.name}</div>
            <div className="mainDish">Main Dish: {meal.mainDish}</div>
            <div className="mainDish">Side Dish: {meal.sideDish}</div>
            <div className="mainDish">Beverage: {meal.bev}</div>
            <button className="dltBtn"> Delete Meal </button>
    </section>
)