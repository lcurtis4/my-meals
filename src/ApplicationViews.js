import { Route } from "react-router-dom";
import { MealProvider } from "./components/Meal/MealProvider";
import { SpecialProvider } from "./components/Specials/SpecialProvider";
import { MealList } from "./components/Meal/MealList";
import { SpecialList } from "./components/Specials/SpecialList";
import { MealForm } from "./components/Meal/mealForm";
import { SpecialDropdown } from "./components/Specials/SpecialDropDown";

export const ApplicationViews = () => {
    return (
        <>
        <MealProvider>
            <Route exact path="/meals">
            <article className="mealCss">
                <MealList />
                <MealForm />
            </article>
            </Route>
        <SpecialProvider>
            <Route exact path="/specials">
            <SpecialDropdown />
            <SpecialList />
            </Route>
        </SpecialProvider>    
        </MealProvider>
        </>
    );
};
