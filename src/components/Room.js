import React from 'react';
import {Link} from 'react-router-dom';
import defaultImage from '../imgfolder/room-5.jpg';
import PropsTypes from 'prop-types';

export default function Room({room}) {
    const { name, reformed, images, price } = room;
    return (
        <article className="room">
           <div className="img-container">
               <img src={images[0] || defaultImage} 
               alt="single room" />
               <div className="price-top">
                   <h6>€{price}</h6>
               <p>per night</p>
               </div> 
               <Link to={`/rooms/${reformed}`}  
               className="btn-primary 
               room-link">
                   Showcase
                </Link>           
               </div> 
               <p className="room-info">{name}</p>
        </article>
    );
}

Room.PropsTypes= {
    room: PropsTypes.shape({
        name: PropsTypes.string.isRequired,
        reformed: PropsTypes.string.isRequired,
        images: PropsTypes.arrayOf(PropsTypes.string)
        .isRequired,
        price: PropsTypes.number.isRequired
    })
}