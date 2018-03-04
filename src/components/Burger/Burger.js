import React from 'react';
import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // Transforma el objeto en un array de arrays
    let tansformedIngedients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
            })
            // Aplana el array para calcular la longitud
            .reduce ((arr, el) => {
                return arr.concat(el)
            }, []);

    if (tansformedIngedients.length === 0) {
        tansformedIngedients = "Please start adding ingredients!";
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { tansformedIngedients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
