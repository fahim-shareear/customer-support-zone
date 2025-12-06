import React from 'react';
import Card from './Card';

const Bodycard = ({user}) => {
    console.log(user)
    return (
        <div className="w-8/12 ">
            <h1 className="text-[19px] font-bold text-black p-2">Customer Tickets</h1>
            <div className="md:grid md:grid-cols-2 gap-2 md:w-full sm:grid-cols-1 ml-4 shadow-md">
                {
                user.map(u => <Card u={u} key={u.id}></Card>)
            }
            </div>
        </div>
    );
};

export default Bodycard;