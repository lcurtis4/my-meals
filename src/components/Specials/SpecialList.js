import { useEffect, useContext } from "react";
import { SpecialContext } from "../Specials/SpecialProvider";
import { MealContext } from "../Meal/MealProvider";
import { SpecialCard } from "../Specials/SpecialCard";
import "../Specials/Specials.css";
import { MealCard } from "../Meal/MealCard";

// MealList is responsible for displaying the saved meals on the dom.
export const SpecialList = () => {
    const { specials, getSpecials } = useContext(SpecialContext);
    const { meals, getMeals } = useContext(MealContext);

    const randomSpecialId = Math.floor((Math.random() * specials.length) + 0)
    const todaySpecial = specials[randomSpecialId]

    /*By using useEffect, I have told React that my component needs to do something after render. 
    React will remember the function  passed, and call it later after performing the DOM updates. */
    useEffect(() => {
        getSpecials();
        getMeals()
    }, []);
    const breakfast = meals.find(meal => meal.id === todaySpecial?.breakfastId)
    const lunch = meals.find(meal => meal.id === todaySpecial?.lunchId)
    const dinner = meals.find(meal => meal.id === todaySpecial?.dinnerId)

    // This return is just calling the MealCard to the dom
    console.log(specials)
    console.log(randomSpecialId)
    console.log("test", specials[randomSpecialId])
    return (
        <>
        <div className="specialList">
            <div className="specials">
            <h2>Today's Specials</h2>
            <div>
                {breakfast?.name}
                    <div>
                    {lunch?.name} 
                    </div>
                    {dinner?.name}
                    {/* <MealCard key={specials.id} meal={specials} />; */}
            </div>
            </div>
        </div>
        </>
    );
};
