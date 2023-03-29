import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    const arrOfMeal = [];
    for(const meal of cart) {
        arrOfMeal.push(meal);
    }
    return (
        <div className='sticky top-0'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    {
                        arrOfMeal.map(mealName => <h2 className='card-title'>{mealName}</h2>)
                    }
                    <div className="card-actions justify-end">
                    <button className="btn btn-success">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;