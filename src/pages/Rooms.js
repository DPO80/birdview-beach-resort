import React from "react"
import Content from "../components/Content";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

const Rooms = () => {
    return (
    <>
    <Content content="roomsContent">
        <Banner title="rooms & suites">
            <Link to="/" className="btn-primary">
                Return home
            </Link>
        </Banner>
    </Content>
    <RoomContainer />
    </>

    );
};


export default Rooms;