import React, { Component } from 'react';
import items from "./Data1";
const DiningContext = React.createContext();
// <DiningContext.Provider value={'hello'
class DiningProvider extends Component {
    state = {
        dinings: [],
        arrangedMeals: [],
        featuredMeals: [],
        type: 'all',
        capacity: 1,
        loading: true,
        price: 0,
        minPrice: 0,
        maxprice: 0,
    };   
    // getData1

    componentDidMount() {
        // this.getData1
        let dinings  = this.formatData1(items)
        let featuredMeals = dinings.filter
        (meal => meal.featured === true);
        let maxPrice = Math.max(...dinings.map
            (item => item.price));
        
        
this.setState({
        dinings,
        featuredMeals,
        arrangedMeals: dinings,
        loading: false,  
        price:maxPrice,
        maxPrice,      
    }); 
}
formatData1(items) {
    let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image =>
                image.fields.file.url);
        
    let meal = { ...item.fields, images, id };
            return meal;
        });
            return tempItems;
    
}

getMeal = (myform) => {
    let tempDinings = [...this.state.dinings];
    const meal = tempDinings.find
    (meal => meal.myform === myform );
    return meal;
};
handleChange = event => {
    const target = event.target.type;
    const value = event.type === "checkbox" ?
    target.checked : target.value;
    const name = event.target.name;
    this.setState ({
        [name]:value
    },this.filterDinings 
    );
    
};
    
filterdinings = () => {
    let {
        dinings, 
        type, 
        capacity,
         price
    } = this.state   
 // all meals
    let tempDinings = [...dinings];

// transform value
capacity = parseInt(capacity);
price = parseInt(price);
// filter by type
if(type !== 'all') {
    tempDinings = tempDinings.filter(meal =>meal.type === 
        type);
}
// this is filtered by capacity
if(capacity !==1) {
    tempDinings = tempDinings.filter(meal =>meal.capacity >=
        capacity)
}
//filter by price
tempDinings = tempDinings.filter(meal => 
    meal.price <= price);

    this.setState({
        arrangedMeals:tempDinings
    });

};


 
     
    render() {
        return (
            <DiningContext.Provider value={{ 
                ...this.state,
            getMeal: this.getMeal,
            handleChange:this.handleChange
            }}
            >
            {this.props.children}
            </DiningContext.Provider>          
        );
    }


}
const DiningConsumer = DiningContext.Consumer;

export function withDiningConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <DiningConsumer>
            {value => <Component {...props} context={value} />}
        </DiningConsumer>        
   }
 }
export{ DiningProvider, DiningConsumer, DiningContext };


