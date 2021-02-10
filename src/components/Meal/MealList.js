import { useEffect, useContext } from "react";
import { MealContext } from "./MealProvider";
import { MealCard } from "./MealCard";
import "./Meal.css";

// MealList is responsible for displaying the saved meals on the dom.
export const MealList = () => {
  const { meals, getMeals } = useContext(MealContext);
    useEffect(() => {
       // console.log("MealList: useEffect - getMeals") 
        getMeals()
    }, [])
    
    return ( 
        <>
        <h2>Meals</h2>
    <div className="meals">
    {
        meals.map(meal => {
            return <MealCard key={meal.id} meal={meal} /> 
        })
            }
            </div>
    </>
  );
};
