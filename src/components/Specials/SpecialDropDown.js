import { useState, useContext, useEffect } from "react";
import { MealContext } from "../Meal/MealProvider";

export const SpecialDrpdwn = () => {
    const [breakfastChoices, setBreakfastChoices] = useState([]);
    const [lunchChoices, setLunchChoices] = useState([]);
    const [dinnerChoices, setDinnerChoices] = useState([]);

    const { meals, getMeals } = useContext(MealContext);

    useEffect(() => {
        getMeals()
    }, []);
    
    useEffect(() => {
        /* loop over meals, add the meal to the corresponding array. */ 
        const breakfast = []
        const lunch = []
        const dinner = []
        for (const meal of meals ) {
            if (meal.mealTypeId === 1 ) {
                breakfast.push(meal)
            } else if (meal.mealTypeId ===  2 ){
                lunch.push(meal)
            } else {
                dinner.push(meal)
            }
        }
        setBreakfastChoices(breakfast) 
        setLunchChoices(lunch)
        setDinnerChoices(dinner)

    },[meals])

    const handleControlledInputChange = (event) => {
        // const newMeal = { ...meal };

        // newMeal[event.target.id] = event.target.value;

        // setMeal(newMeal);
        // console.log(meal);
    };


    return ( 
    <form className="specialDropdown">
        <fieldset>
        <div className="form-group">
        <label htmlFor="breakfast">Breakfast: </label>
        <select
            // value={meal.breakfast}
            name="breakfast"
            id="breakfast"
            className="form-control"
            placeholder="What Meal is this?"
            onChange={handleControlledInputChange}
            >
            <option value="">Please Select a Breakfast</option>
            {breakfastChoices.map((meal) => {
                return <option value="{meal.id}"> 
                    {meal.name}
                </option> 
            })}
        </select>
        </div>
    </fieldset>

        <fieldset>
        <div className="form-group">
        <label htmlFor="lunch">Lunch: </label>
        <select
            // value={meal.breakfast}
            name="lunch"
            id="lunch"
            className="form-control"
            placeholder="What Meal is this?"
            onChange={handleControlledInputChange}
            >
            <option value="">Please Select a Lunch</option>
            {lunchChoices.map((meal) => {
                return <option value="{meal.id}"> 
                    {meal.name}
                </option> 
            })}
        </select>
        </div>
    </fieldset>

        <fieldset>
        <div className="form-group">
        <label htmlFor="dinner">Dinner: </label>
        <select
            // value={meal.breakfast}
            name="dinner"
            id="dinner"
            className="form-control"
            placeholder="What Meal is this?"
            onChange={handleControlledInputChange}
            >
            <option value="">Please Select a Dinner</option>
            {dinnerChoices.map((meal) => {
                return <option value="{meal.id}"> 
                    {meal.name}
                </option> 
                })}
        </select>
        </div>
    </fieldset>
    </form> 
    )
}