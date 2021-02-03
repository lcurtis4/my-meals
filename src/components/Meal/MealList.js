import { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { MealContext } from "./MealProvider"
import { MealCard} from "./MealCard"

export const MealList = () => {
    const { meals, getMeals } = useContext(MealContext)

    useEffect(() => {
        console.log("MealList: useEffect - getMeals") 
        getMeals()
    }, [])

const history = useHistory()

console.log(meals)
return ( 
    <>
        <h2>Meals</h2>
    <div className="meals">
    {
        meals.map(meal => {
            return <MealCard key={meal.id} meal={meal} /> 
        })
            }
            </div>
    </>
)
}