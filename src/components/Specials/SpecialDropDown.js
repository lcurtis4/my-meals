import { useState } from "react";

export const SpecialDrpdwn = () => {
    const [meal, setMeal] = useState({
        name: "",
        mealTypeId: 0,
        mainDish: "",
        sideDish: "",
        bev: "",
    });

    const handleControlledInputChange = (event) => {
        const newMeal = { ...meal };

        newMeal[event.target.id] = event.target.value;

        setMeal(newMeal);
        console.log(meal);
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
        </select>
        </div>
    </fieldset>
    </form> 
    )
}