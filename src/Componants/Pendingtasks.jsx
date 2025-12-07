const Pendingtasks = ({user}) => {
    // const userTask = use(user);
    return (
        <div className="bg-white m-2 p-2 rounded-md">
            <h1 className="text-[13px] text-black">{user.title}</h1>
            <button className="bg-green-500 p-1 rounded-lg font-medium shadow-amber-50">Complete</button>
        </div>
    );
};

export default Pendingtasks;