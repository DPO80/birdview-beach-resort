import React, { Component } from 'react';
import { FaCocktail,FaSpa,FaShip,FaHiking} from 
'react-icons/fa';
import Title from './Title';
// import {Link } from 'react-router-dom';

export default class Offers extends Component {
   state = {
       offers:[     
        {
            icon: <FaSpa />,
            title: "In-Room Spa",
            info: 'Companies can passively accept the marketing environment as an uncontrollable element to which they must adapt, avoiding threats and taking advantage of opportunities as they arise. Or they can take a proactive stance!',
             
            
        },
        {
            icon: <FaShip />,
            title: "Daily Canal Cruise",
            info: 'Companies can passively accept the marketing environment as an uncontrollable element to which they must adapt, avoiding threats and taking advantage of opportunities as they arise. Or they can take a proactive stance!'
        },
        {
            icon: <FaCocktail />,
            title: "Cocktails",
            info: 'Companies can passively accept the marketing environment as an uncontrollable element to which they must adapt, avoiding threats and taking advantage of opportunities as they arise. Or they can take a proactive stance!'
        },
       
        {
            icon: <FaHiking/>,
            title: "In-Villa Dining",
            info: 'Companies can passively accept the marketing environment as an uncontrollable element to which they must adapt, avoiding threats and taking advantage of opportunities as they arise. Or they can take a proactive stance!'
        },
        
        
        
        
        
      

       ]
};
   
   
    render() {
        return (
            <section className="offers">
            <Title title="offers" />
            <div className="offers-center">
                {this.state.offers.map((item, index ) => {
                    return <article key={index} className="offers">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>

                })}
            </div>
            </section>
        );
    }
}
