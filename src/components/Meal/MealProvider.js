import React, { useState, createContext } from "react"

export const MealContext = createContext() 

export const MealProvider = (props) => {
    const [meals, setMeals] = useState([]) 

    //getMeals is pulling the meal from the database. Then running setMeals to set the state of meal. 
    const getMeals = () => {
        return fetch("http://localhost:8088/meals?_expand=mealType") 
        .then(res => res.json())
        .then(setMeals) 
    }
    // addMeal is using the POST method to add the meal to the database 
    const addMeal = mealObj => {
        return fetch("http://localhost:8088/meals", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mealObj)
        })
        .then(getMeals)
    }
    
    const dltMeal = mealId => {
        return fetch(`http://localhost:8088/meals/${mealId}`, {
        method: "DELETE"
    })
        .then(getMeals)
    }

return (
    <MealContext.Provider value={{
        meals, getMeals, addMeal, dltMeal
        
    }}>
            {props.children}
        </MealContext.Provider>
    )
}