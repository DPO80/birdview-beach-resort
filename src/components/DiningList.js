import React from 'react';
import Meal from './Meal';

export default function DiningList({dinings}) {
    if (dinings.length === 0) {
        return (
            <div className="empty-search">
                <h3>Sorry no meal marched your search entry</h3>
            </div>
        )
    }
    return (
        <section className="dininglist">
        <div className="dininglist-center">
            {
                dinings.map(item => {
                    return <Meal key={item.id} meal={item} />;
                })}
            </div>
            </section>
    );
}


