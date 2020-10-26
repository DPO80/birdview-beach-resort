import React, { Component } from 'react';
import defaultBackground from '../imgfolder/room-1.jpg';
// import Content from '../components/Content';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledContent from '../components/StyledContent';


export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
    // console.log(this.props);
   
    this.state = {
        reformed: this.props.match.params.reformed,
        defaultBackground
        };
    }
    static contextType = RoomContext;   
    //  componentDidMount() {}
   
    render() { 
        const {getRoom} = this.context;
        const room = getRoom(this.state.reformed);
        if (!room) {
            return (
            <div classname="error">
                <h3>Such room cannot be found...</h3>
                <Link to='/room
                ' className="btn-primary">
                    Back to rooms
                </Link>
            </div>
        
         );   
    }
    const { 
        name, 
        description, 
        capacity, 
        size, 
        price, 
        extras,
        breakfast, 
        pets, 
        images 
    } = room;
    const [mainImage,...defaultImage] = images
        return ( 
        <>
        <StyledContent image={mainImage  ||
        this.state.defaultBackground}>
            <Banner title={`${name} room`}>
                <Link to='/rooms' className="btn-primary">
                Back to rooms
                </Link>
            </Banner>
        </StyledContent>
        <section className="single-room">
        <div className="single-room-imgfolder">
        {defaultImage.map((item, index) => {
         return   <img Key={index} src={item} alt={name} />;
        })}
        </div>
        <div className="single-room-info">
            <article className="disc">
                <h3>Room Information:</h3>
                <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info:</h3>
                    <h6>price : €{price}</h6>
                    <h6>size : {size} SQFT</h6>
                    <h6>
                        max-capacity : {" "}
                        {capacity > 1 ? `${capacity} people` : `${capacity}
                       person `
                       }
                        </h6>
                        <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>

                </article>
        </div>
        </section>
        <section className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
                {extras.map((item,index) => {
                    return <li key={index}>- {item}</li>
                })}
                </ul>
        </section>
        </>
        );
    }
}





/*


*/

