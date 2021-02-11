import React, { useContext } from "react"; 
import { useHistory } from "react-router-dom";
import { SpecialContext } from "./SpecialProvider";

export const SpecialCard = ({ special }) => {
    const history = useHistory();
    const {dltSpecial} = useContext(SpecialContext);
    
    const handleDlt = () => {
        dltSpecial(special.id).then(() => {
            history.push("/specials");
        });
    };

    // return (
    //     <section className="specials">
    //     <div className="mainDish">Name: {specials.breakfastId.name}</div>
    //     <div className="mainDish">Main Dish: {meal.mainDish}</div>
    //     <div className="mainDish">Side Dish: {meal.sideDish}</div>
    //     <div className="mainDish">Beverage: {meal.bev}</div>
    //     <button onClick={handleDlt}> Delete Meal </button>
    //     </section>
    // );
}