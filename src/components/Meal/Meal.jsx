import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meal.css';


const Meal = (props) => {
    const {strMealThumb, strMeal, strCategory} = props.meal;
    const handleOrderNow = props.handleOrderNow;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Meal" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}!</h2>
                    <p className='font-medium'>Category: {strCategory}</p>
                <div className="card-actions justify-end">
                    <button
                     onClick={() => handleOrderNow(strMeal)} className="btn btn-primary">Order Now <FontAwesomeIcon icon={faCartPlus} className="ml-1"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Meal;