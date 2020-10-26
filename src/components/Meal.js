import React from 'react';
import {Link} from 'react-router-dom';
import defaultImage from '../folder1/meal-4.jpg';
import PropsTypes from 'prop-types';


export default function Meal({meal}) {
    const { name, myform, images, price } = meal;
    return (
        <article className="meal">
            <div className="img-container">
            <img src={images[ 0 ] || defaultImage}
            alt="single meal" />
            <div className="price-top">
            <h6>€{price}</h6>
               <p>per meal</p> 
            </div>
            <Link to={`/dining/${myform}`}  
               className="btn-primary 
            meal-link">
                   Featured
            </Link>           
               </div> 
               <p className="meal-info">{name}</p> 
        </article>
    );
}

Meal.PropsTypes= {
    meal: PropsTypes.shape({
        name: PropsTypes.string.isRequired,
        myform: PropsTypes.string.isRequired,
        images: PropsTypes.arrayOf(PropsTypes.string)
        .isRequired,
        price: PropsTypes.number.isRequired
    })
}