import { Route } from "react-router-dom"
import { MealProvider } from "./components/Meal/MealProvider"
import { MealList } from "./components/Meal/MealList"
import { MealForm } from "./components/Meal/mealForm"
import { NavBar } from "./components/nav/NavBar"

export const ApplicationViews = () => {
    return (
        <> 
        <MealProvider> 
            <Route exact path="/meals">
                <MealList /> 
                <MealForm /> 
            </Route>
        
        
        </MealProvider>
        </>
    )
}