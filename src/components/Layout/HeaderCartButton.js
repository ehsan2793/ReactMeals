import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnstate, setButtonState] = useState(false);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClassess = `${classes.button} ${btnstate ? classes.bump : ''} `;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonState(true);
        const timer = setTimeout(() => {
            setButtonState(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClassess} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
