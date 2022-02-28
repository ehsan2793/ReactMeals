import React, { useRef, useState } from 'react';
import classes from './MealIteamForm.module.css';
import Input from '../../UI/Input';
const MealIteamForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amoutInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmuout = amoutInputRef.current.value;
        const enterAmountNumber = +enteredAmuout;
        if (
            enteredAmuout.trim().length === 0 ||
            enterAmountNumber < 1 ||
            enterAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enterAmountNumber);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amoutInputRef}
                label="Amout"
                input={{
                    id: 'amout',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>Add</button>
            {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
        </form>
    );
};

export default MealIteamForm;
