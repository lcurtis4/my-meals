import { useEffect, useContext } from "react";
import { SpecialContext } from "../Specials/SpecialProvider";
import { MealCard } from "../Meal/MealCard";
import "../Meal/Meal.css";

// MealList is responsible for displaying the saved meals on the dom.
export const SpecialList = () => {
    const { specials, getSpecials } = useContext(SpecialContext);

    /*By using useEffect, I have told React that my component needs to do something after render. 
            React will remember the function  passed, and call it later after performing the DOM updates. */
    useEffect(() => {
        getSpecials();
    }, []);

    // This return is just calling the MealCard to the dom
    return (
        <>
        <div className="specialList">
            <div className="specials">
            <h2> Today's Specials</h2>
            {specials.map((special) => {
                // return <MealCard key={meal.id} meal={meal} />;
            })}
            </div>
        </div>
        </>
    );
};
