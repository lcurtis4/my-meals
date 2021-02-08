import { useContext, useState } from "react";
import { MealContext } from "./MealProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Meal.css"

export const MealForm = () => {
    const { addMeal } = useContext(MealContext);

    //setting up what the database is looking for from the save function
    const [meal, setMeal] = useState({
        name: "",
        mealTypeId: 0,
        mainDish: "",
        sideDish: "",
        bev: "",
    });

    //The useParams hook will return an object of key/value pairs from your application URL that is set to be dynamic. 
    const { mealId } = useParams();
    const history = useHistory();

    // This function is actively updating the state of meal 
    const handleControlledInputChange = (event) => {
        const newMeal = { ...meal };

        newMeal[event.target.id] = event.target.value;

        setMeal(newMeal);
        console.log(meal);
    };

    /* This function shows what is being saved from the form and how it is accessed in the database. 
    It uses ".then" to ".push" the data to the json database */
    const handleSaveNewMeal = () => {
        addMeal({
        name: meal.name,
        mealTypeId: parseInt(meal.mealTypeId),
        mainDish: meal.mainDish,
        sideDish: meal.sideDish,
        bev: meal.bev,
        }).then(() => history.push("/meals"));
    };

  //This return statement populates the dom with the "Meal Form" for adding a meal to the local database and displaying it
return (
    <form className="mealForm">
        <h2 className="mealForm_title">New Meal</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="name">Meal Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                required
                autoFocus
                className="form-control"
                placeholder="Meal Name"
                onChange={handleControlledInputChange}
                defaultValue={meal.name}
                />
        </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
            <label htmlFor="mealTypeId">What meal is this?: </label>
            <select
                value={meal.mealTypeId}
                name="mealTypeId"
                id="mealTypeId"
                className="form-control"
                placeholder="What Meal is this?"
                onChange={handleControlledInputChange}
                >
                <option value="">Please Select a Meal</option>
                <option value="1">Breakfast</option>
                <option value="2">Lunch</option>
                <option value="3">Dinner</option>
            </select>
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
            <label htmlFor="mainDish">Main Dish: </label>
            <input
                type="text"
                id="mainDish"
                name="mainDish"
                required
                autoFocus
                className="form-control"
                placeholder="Main Dish"
                onChange={handleControlledInputChange}
                defaultValue={meal.mainDish}
                />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="sideDish">Side Dish: </label>
                <input
                    type="text"
                    id="sideDish"
                    name="sideDish"
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Side Dish"
                    onChange={handleControlledInputChange}
                    defaultValue={meal.sideDish}
                    />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
            <label htmlFor="bev">Beverage: </label>
            <input
                type="text"
                id="bev"
                name="bev"
                required
                autoFocus
                className="form-control"
                placeholder="Beverage"
                onChange={handleControlledInputChange}
                defaultValue={meal.bev}
                />
            </div>
        </fieldset>
        <button
            className="btn btn-primary"
            //disable={isLoading}
            onClick={(event) => {
                event.preventDefault();
                handleSaveNewMeal();
            }}
            >
            {mealId ? <> Save Meal</> : <> Save Meal</>}
        </button>
    </form>
    );
};
