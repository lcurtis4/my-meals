import React from 'react';
import ReactDOM from 'react-dom'

export const = class MealForm extends React.Component {
    render () {
        return (
            <form>
                <h1> Meal Name</h1>
                <p> Enter your meal name:</p>
                <input 
                type="text"
                />
            </form>
        );
    }
}
ReactDOM.render(<MealForm />, document.getElementById('root'));
/* TODO: 
    Create form elements for dish name
    Create form elements for main dish
    Create form elements for side dish
    Create form elements for beverage
    Create form elements for side dish

    create dropdown to select meal type
        options:
            breakfast 
            lunch 
            dinner

    create save button

    make them all save to the database 

    boom you're done kid!
     */