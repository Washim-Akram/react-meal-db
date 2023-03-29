import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState("");

    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])

    const handleOrderNow = (props) => {
        const newCart = [...cart, props]
        setCart(newCart);
    }

    return (
        <div className='flex flex-col md:flex-row justify-between gap-5 w-10/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-12 py-10'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        handleOrderNow={handleOrderNow}
                        ></Meal>)
                }
                </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meals;