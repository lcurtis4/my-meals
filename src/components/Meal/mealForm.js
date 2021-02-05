import { useContext, useEffect, useState } from "react"
import { MealContext } from "./MealProvider"
import {useHistory, useParams } from 'react-router-dom'


export const MealForm = () => {
    const { addMeal } = useContext(MealContext)
    
    const [meal, setMeal] = useState({
        name: "",
        mealTypeId: 0,
        mainDish: "",
        sideDish: "",
        bev: ""
    })
    
    //const [isLoading, setIsLoading] = useState(true);

    const {mealId} = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newMeal = { ...meal }

        newMeal[event.target.id] = event.target.value 

        setMeal(newMeal)
    }

    const handleSaveNewMeal = () => {
        addMeal({
            name: meal.name,
            mealTypeId: parseInt(meal.mealTypeId),
            mainDish: meal.mainDish,
            sideDish: meal.sideDish,
            bev: meal.bev
        }).then(() => history.push("/meals"))
        }


    
    return (
        <form className="mealForm">
        <h2 className="mealForm_title">New Meal</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Meal Name:</label>
                <input type="text" id="name" name="name" required autoFocus className="form-control"
                placeholder="Meal Name"
                onChange={handleControlledInputChange}
                defaultValue={meal.name}/>
            </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="mealTypeId">What meal is this?: </label>
            <select value={meal.mealTypeId} name="mealTypeId" id="mealTypeId" className="form-control" 
            onChange={handleControlledInputChange}>
              <option value="1">Breakfast</option>
              <option value="2">Lunch</option>
              <option value="3">Dinner</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="mainDish">Main Dish: </label>
                <input type="text" id="mainDish" name="mainDish" required autoFocus className="form-control"
                placeholder="Main Dish" 
                onChange={handleControlledInputChange}
                defaultValue={meal.mainDish}/>
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="sideDish">Side Dish: </label>
                <input type="text" id="sideDish" name="sideDish" required autoFocus className="form-control"
                placeholder="Side Dish" 
                onChange={handleControlledInputChange}
                defaultValue={meal.sideDish}/>
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="bev">Beverage: </label>
                <input type="text" id="bev" name="bev" required autoFocus className="form-control"
                placeholder="Beverage" 
                onChange={handleControlledInputChange}
                defaultValue={meal.bev}/>
            </div>
        </fieldset>
        <button className="btn btn-primary"
        //disable={isLoading}
        onClick={event => {
            event.preventDefault()
            handleSaveNewMeal()
        }}>
        {mealId ? <> Save Meal</> : <> Add Meal</>}</button>

    </form>
)
}
    


/* TODO: 
Create form elements for dish name
    create dropdown to select meal type
        options:
            breakfast 
            lunch 
            dinner

    make them all save to the database 

    boom you're done kid!
     */