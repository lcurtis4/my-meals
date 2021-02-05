import { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { MealContext } from "./MealProvider"
import { MealCard} from "./MealCard"

export const MealList = () => {
    const { meals, getMeals } = useContext(MealContext)

    const history = useHistory()
    useEffect(() => {
       // console.log("MealList: useEffect - getMeals") 
        getMeals()
    }, [])
    
    
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