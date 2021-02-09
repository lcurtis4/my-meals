import { Route } from "react-router-dom"
import { MealProvider } from "./components/Meal/MealProvider"
import { MealList } from "./components/Meal/MealList"
import { SpecialList } from "./components/Specials/SpecialList"
import { MealForm } from "./components/Meal/mealForm"
import { SpecialDrpdwn } from "./components/Specials/SpecialDropDown"

export const ApplicationViews = () => {
    return (
        <> 
        <MealProvider> 
            <Route exact path="/meals">
            <article className= "mealCss">
                <MealList /> 
                <MealForm /> 
               </article>
            </Route>
            <Route exact path="/specials">
                <SpecialDrpdwn /> 
                <SpecialList />  
            </Route>
        
        
        </MealProvider>
        </>
    )
}