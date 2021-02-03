import React from "react"
import { Link } from "react-router-dom" 

export const MealCard = ({ meal }) => (
    <section className="meal">
            <Link to={`/meals/detail/${meal.id}`}>
            </Link>
            <div className="mainDish">Name: {meal.name}</div>
            <div className="mainDish">Main Dish: {meal.mainDish}</div>
            <div className="mainDish">Side Dish: {meal.sideDish}</div>
            <div className="mainDish">Beverage: {meal.bev}</div>
    </section>
)