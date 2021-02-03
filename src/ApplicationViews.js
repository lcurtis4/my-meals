import { Route } from "react-router-dom"
import { MealProvider } from "./components/Meal/MealProvider"
import { MealList } from "./components/Meal/MealList"

export const ApplicationViews = () => {
    return (
        <> 
        <MealProvider> 
            <Route exact path="/meals">
                <MealList /> 
            </Route>
        
        
        </MealProvider>
        </>
    )
}