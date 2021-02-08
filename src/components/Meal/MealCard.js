import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import {dltMeal, MealContext} from "./MealProvider"


//HTML Representation of a meal. This is being called on "/meals" 
export const MealCard = ({ meal }) => {
    const history = useHistory()
    const { dltMeal } = useContext(MealContext)
    
    const handleDlt = () => {
        dltMeal(meal.id)
        .then(() => {
            history.push("/meals")
        })
    }
    
    return (
        


    <section className="meal">
            <div className="mainDish">Name: {meal.name}</div>
            <div className="mealType">Type: {meal.mealType.name}</div>
            <div className="mainDish">Main Dish: {meal.mainDish}</div>
            <div className="mainDish">Side Dish: {meal.sideDish}</div>
            <div className="mainDish">Beverage: {meal.bev}</div>
            <button onClick={handleDlt}> Delete Meal </button>
    </section>
        )
}