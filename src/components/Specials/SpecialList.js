import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { MealContext, dltMeal } from "../Meal/MealProvider";
import { MealCard } from "../Meal/MealCard";
import "../Meal/Meal.css";

// MealList is responsible for displaying the saved meals on the dom.
export const SpecialList = () => {
  const { meals, getMeals, dltMeal } = useContext(MealContext);
  const history = useHistory();

  /*By using useEffect, I have told React that my component needs to do something after render. 
    React will remember the function  passed, and call it later after performing the DOM updates. */
  useEffect(() => {
    console.log("MealList: useEffect - getMeals");
    getMeals();
  }, []);



  // This return is just calling the MealCard to the dom
  return (
    <>
      <div className="mealList">
        <div className="meals">
          <h2> Today's Specials</h2>
          {meals.map((meal) => {
            // return <MealCard key={meal.id} meal={meal} />;
          })}
        </div>
      </div>
    </>
  );
};
