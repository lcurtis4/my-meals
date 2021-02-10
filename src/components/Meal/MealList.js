import { useEffect, useContext } from "react";
import { MealContext } from "./MealProvider";
import { MealCard } from "./MealCard";
import "./Meal.css";

// MealList is responsible for displaying the saved meals on the dom.
export const MealList = () => {
  const { meals, getMeals } = useContext(MealContext);
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      <div className="mealList">
        <div className="meals">
          <h2>Meals</h2>
          {meals.map((meal) => {
            return <MealCard key={meal.id} meal={meal} />;
          })}
        </div>
      </div>
    </>
  );
};
