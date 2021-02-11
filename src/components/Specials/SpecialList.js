import { useEffect, useContext } from "react";
import { SpecialContext } from "../Specials/SpecialProvider";
import { MealContext } from "../Meal/MealProvider";
import { MealCard } from "../Meal/MealCard";
import "../Specials/Specials.css";

// MealList is responsible for displaying the saved meals on the dom.
export const SpecialList = () => {
    const { specials, getSpecials, selectedSpecials } = useContext(SpecialContext);
    const { meals, getMeals } = useContext(MealContext);

    /*By using useEffect, I have told React that my component needs to do something after render. 
    React will remember the function  passed, and call it later after performing the DOM updates. */
    useEffect(() => {
        getSpecials();
        getMeals()
    }, []);
    const breakfast = meals.find(meal => meal.id === selectedSpecials?.breakfastId)
    const lunch = meals.find(meal => meal.id === selectedSpecials?.lunchId)
    const dinner = meals.find(meal => meal.id === selectedSpecials?.dinnerId)


    // This return is just calling the MealCard to the dom
    return (    
    <>
        <div className="specialList">
            <div className="specials">
            <h2>Today's Specials</h2>
            <h3> Breakfast:</h3> 
            {selectedSpecials.breakfastId ? 
                   <MealCard  meal={breakfast} />
                   : null }
                   <h3> Lunch:</h3> 
            {selectedSpecials.lunchId ? 
                    <MealCard  meal={lunch} />
                    : null }
                    <h3> Dinner:</h3> 
            {selectedSpecials.dinnerId ? 
                    <MealCard  meal={dinner} />
             : null }
            </div>
        </div>
        </>
    );
};
