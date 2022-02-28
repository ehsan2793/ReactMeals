import React from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meal = () => {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvailableMeals />
        </React.Fragment>
    );
};

export default Meal;
