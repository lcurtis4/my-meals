import React, {useState, createContext} from "react"
import { MealContext } from "../Meal/MealProvider";


export const SpecialContext = createContext()

export const SpecialProvider = (props) => {
    const [specials, setSpecials] = useState([]) 

    const getSpecials = () => {
        return fetch("http://localhost:8088/specials",)
        .then(res => res.json()) 
        .then(setSpecials) 
    }

    const addSpecial = specialObj => {
        return fetch(`http://localhost:8088/specials/${specialObj.id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(specialObj)
        })
        .then(getSpecials)
    }

    const [selectedSpecials, setSelectedSpecials] = useState({
        breakfastId: "",
        lunchId: "",
        dinnerId: "",
    });

return (
    <SpecialContext.Provider value={{
        specials, getSpecials, addSpecial, setSelectedSpecials, selectedSpecials, setSpecials
    }}>
        {props.children}
    </SpecialContext.Provider>
)
}