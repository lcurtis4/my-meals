import React, {useState, createContext} from "react"

export const SpecialContext = createContext()

export const SpecialProvider = (props) => {
    const [specials, setSpecials] = useState([]) 

    const getSpecials = () => {
        return fetch("http://localhost:8088/specials",)
        .then(res => res.json()) 
        .then(setSpecials) 
    }

    const addSpecial = specialObj => {
        return fetch("http://localhost:8088/specials", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(specialObj)
        })
    }

return (
    <SpecialContext.Provider value={{
        specials, getSpecials, addSpecial 
    }}>
        {props.children}
    </SpecialContext.Provider>
)
}