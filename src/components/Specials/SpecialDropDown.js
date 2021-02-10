import { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { MealContext } from "../Meal/MealProvider";
import { SpecialContext} from "./SpecialProvider"

export const SpecialDropdown = () => {
    const [breakfastChoices, setBreakfastChoices] = useState([]);
    const [lunchChoices, setLunchChoices] = useState([]);
    const [dinnerChoices, setDinnerChoices] = useState([]);

    const { meals, getMeals, addSpecial } = useContext(MealContext);
    const { setSelectedSpecials, selectedSpecials } = useContext(SpecialContext)

    const history = useHistory();
    const { specialId } = useParams();

    const [specials, setSpecials] = useState({
        breakfastId: "",
        lunchId: "",
        dinnerId: "",
    });

    useEffect(() => {
        getMeals();
    }, []);

    useEffect(() => {
        console.log(specials);
    }, [specials]);

    useEffect(() => {
        /* loop over meals, add the meal to the corresponding array. */
        const breakfast = [];
        const lunch = [];
        const dinner = [];
        for (const meal of meals) {
        if (meal.mealTypeId === 1) {
            breakfast.push(meal);
        } else if (meal.mealTypeId === 2) {
            lunch.push(meal);
        } else {
            dinner.push(meal);
        }
        }
        setBreakfastChoices(breakfast);
        setLunchChoices(lunch);
        setDinnerChoices(dinner);
    }, [meals]);

    const handleBreakfastInputChange = (event) => {
        // Making a copy of the meal obj and saving that copy under newMeal
        const newMeal = { ...selectedSpecials };

        newMeal.breakfastId = parseInt(event.target.value);

        setSelectedSpecials(newMeal);
        console.log("test" )
    };
    const handleLunchInputChange = (event) => {
        // Making a copy of the meal obj and saving that copy under newMeal
        const newMeal = { ...selectedSpecials };

        newMeal.lunchId = parseInt(event.target.value);

        setSelectedSpecials(newMeal);
        console.log("test" )
    };
    const handleDinnerInputChange = (event) => {
        // Making a copy of the meal obj and saving that copy under newMeal
        const newMeal = { ...selectedSpecials };

        newMeal.dinnerId = parseInt(event.target.value);

        setSelectedSpecials(newMeal);
        console.log("test" )
    };



    const handleSaveSpecial = () => {
        addSpecial({
        breakfastId: specials.breakfastId,
        lunchId: specials.lunchId,
        dinnerId: specials.dinnerId,
        }).then(() => history.push("/specials"));
    };

    return (
        <form className="specialDropdown">
        <fieldset>
            <div className="form-group">
            <label htmlFor="breakfastId">Breakfast: </label>
            <select
                // value={meal.breakfast}
                name="breakfastId"
                id="breakfastId"
                className="form-control"
                placeholder="What Meal is this?"
                onChange={handleBreakfastInputChange}
            >
                <option value="">Please Select a Breakfast</option>
                {breakfastChoices.map((meal) => {
                return <option value={meal.id}>{meal.name}</option>;
                })}
            </select>
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
            <label htmlFor="lunchId">Lunch: </label>
            <select
                // value={meal.breakfast}
                name="lunchId"
                id="lunchId"
                className="form-control"
                placeholder="What Meal is this?"
                onChange={handleLunchInputChange}
            >
                <option value="">Please Select a Lunch</option>
                {lunchChoices.map((meal) => {
                return <option value={meal.id}>{meal.name}</option>;
                })}
            </select>
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
            <label htmlFor="dinnerId">Dinner: </label>
            <select
                // value={meal.breakfast}
                name="dinnerId"
                id="dinnerId"
                className="form-control"
                placeholder="What Meal is this?"
                onChange={handleDinnerInputChange}
            >
                <option value="">Please Select a Dinner</option>
                {dinnerChoices.map((meal) => {
                return <option value={meal.id}>{meal.name}</option>;
                })}
            </select>
            </div>
        </fieldset>
        <button
            className="btn btn-secondary"
            onClick={(event) => {
            event.preventDefault();
            handleSaveSpecial();
            }}
        >
            {specialId ? <> Save Specials</> : <> Save Specials</>}
        </button>
        </form>
    );
};
