import React from 'react';
import Content from '../components/Content';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import DiningContainer from '../components/DiningContainer';



const Dining = () => {
    return (
    <>
    <Content content="diningContent">
        <Banner title="Birdview Restaurant" 
        subtitle="Exclusive Beachside Dining Experience">
        <Link to="/" className="btn-primary">
            Return home
        </Link>
        </Banner>
    </Content>
   <DiningContainer />
   
    </>
    );
};

export default Dining;

