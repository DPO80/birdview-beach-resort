import React from 'react'
import Content from "../components/Content";
import Banner from "../components/Banner";
import {Link } from "react-router-dom";
import Offers from '../components/Offers';
import RoomsShowcase from '../components/RoomsShowcase';
import FeaturedMeals from '../components/FeaturedMeals';



export default function Home() {

    return (
        <>
        <Content>
        <Banner title="Luxurious rooms" subtitle="super-deluxe rooms starting
        at €3000">
        <Link to='/rooms' className="btn-primary">
            Rooms & Suites
        </Link>
        <section className="btn-secondary-col">  
        <Link to='/dining' className="btn-secondary">
            Dining
        </Link>
        </section>
        
        </Banner>       
        </Content>
    
        <Offers />
       <RoomsShowcase /> 
       <FeaturedMeals />
       </>
    );
    
}
