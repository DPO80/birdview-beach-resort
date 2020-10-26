import React from 'react';
import DiningsFilter from "./DiningFilter";
import DiningsList from "./DiningList";
import { withDiningConsumer } from "../context1";
import Loading from "./Loading";

 function DiningContainer({context}) {
    const { loading, arrangedMeals, dinings } = context;
    if (loading) {     return <Loading />;
    }  
       return (
        <>
            <DiningsFilter dinings={dinings} />
            <DiningsList  dinings={arrangedMeals} />
        </>
    );
}

export default withDiningConsumer(DiningContainer);