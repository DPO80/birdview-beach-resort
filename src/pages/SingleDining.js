import React, { Component } from 'react';
import defaultBackground from '../folder1/core-meal-background-1.jpg';
// import Content from '../components/Content';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { DiningContext } from '../context1';
import StyledContent from '../components/StyledContent';

export default class SingleDining extends Component {
    constructor(props) {
        super(props);
    // console.log(this.props);
   
    this.state = {
        myform: this.props.match.params.myform,
        defaultBackground
        };
    }
    static contextType = DiningContext;   
    //  componentDidMount() {}
   
    render() { 
        const {getMeal} = this.context;
        const meal = getMeal(this.state.myform);
        if (!meal) {
            return (
            <div classname="error">
                <h3>Such meal cannot be found...</h3>
                <Link to='/dining' className="btn-primary">
                    Back to dining
                </Link>
            </div>
        
         );   
    }
        const { 
            name, 
            description, 
            capacity, 
            price, 
            breakfast, 
            images  
        } = meal;
        const [mainImage,...detailedImage] = images
            return ( 
            <>
           <StyledContent image={mainImage  ||
           this.state.defaultBackground}>
               <Banner title={`${name} meal`}>
                   <Link to='/dining' className="btn-primary">
                   Back to dining
                   </Link>
               </Banner>
           </StyledContent>
           <section className="single-dining">
           <div className="single-dining-folder1">
            {detailedImage.map((item, index) => {
             return   <img Key={index} src={item} alt={name} />;
            })}
            </div>
            <div className="single-dining-info">
                <article className="disc">
                    <h3>Meal Information:</h3>
                    <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info:</h3>
                        <h6>price : €{price}</h6>
                        <h6>
                        max-capacity : {" "}
                        {capacity > 1 ? `${capacity} people` : `${capacity}
                       person `
                       }
                        </h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                </div>
            </section>

         </>
        );
    }
}
