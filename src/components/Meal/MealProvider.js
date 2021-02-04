import React, { useState, createContext } from "react"

export const MealContext = createContext() 

export const MealProvider = (props) => {
    const [meals, setMeals] = useState([]) 

    const getMeals = () => {
        return fetch("http://localhost:8088/meals?_expand=mealType") 
        .then(res => res.json())
        .then(setMeals) 
    }
    
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


    return (
        <MealContext.Provider value={{
            meals, getMeals, addMeal 
        }}>
            {props.children}
        </MealContext.Provider>
    )
}