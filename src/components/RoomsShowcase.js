import React, { Component } from 'react'
import { RoomContext  } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';


export default class RoomsShowcase extends Component {
    static contextType = RoomContext;
    render() {
  let { loading, roomsShowcase : rooms } = this.context;
rooms = rooms.map( room => {
    return <Room Key={room.id} room={room} />;
});

        return (
            <section className="rooms-showcase"> 
            <Title title="Showcased-Rooms" />
            <div className="rooms-showcase-center">
                {loading ? <Loading /> : rooms }
            </div>                    
            </section>
        );     
    }
}
