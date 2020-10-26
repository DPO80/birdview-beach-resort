import React, { Component } from 'react';
import { DiningContext  } from '../context1';
import Loading from './Loading';
import Meal from './Meal';
import Title from './Title';
export default class FeaturedMeals extends Component {
    static contextType = DiningContext;
    render() {
let { loading, featuredMeals : dining } =
this.context;
dining = dining.map( meal => {
    return <Meal Key={meal.id} meal={meal} />;
});
    return (
            <section className="featured-meals"> 
            <Title title="Featured-Meals" />
                <div className="featured-meals-center">
                    {loading ? <Loading /> : dining }
                </div>                    
            </section>
        );     
    }
}
