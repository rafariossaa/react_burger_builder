import React from 'react';
import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //Transforma el objeto en un array
    const tansformedIngedients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
            });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { tansformedIngedients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
