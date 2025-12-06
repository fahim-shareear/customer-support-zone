import Card from './Card';

const Bodycard = ({user, pendingState, setPendingState}) => {
    const handleClick = () =>{
        setPendingState = ([...pendingState, user])
        console.log(setPendingState);
    }
    // console.log(user)
    return (
        <div className="w-8/12 border-2 border-red-500  overflow-hidden">
            <div>
                <h1 className="text-[19px] font-bold text-black p-2">Customer Tickets</h1>
                <div className="md:grid md:grid-cols-2 gap-2 md:w-full sm:grid-cols-1 ml-2 shadow-md cursor-pointer">
                    {
                        user.map(u => <Card u={u} key={u.id} handleClick={handleClick}></Card>)
                    }
                </div>
            </div>
            <div>
                <h1 className="text-[19px] font-bold text-black p-2">Resolved Tickets</h1>
            </div>
        </div>
    );
};

export default Bodycard;