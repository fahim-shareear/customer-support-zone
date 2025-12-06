import React, { use } from 'react';

const Mainbody = ({userPromise}) => {
    const jsonData = use(userPromise);
    console.log(jsonData)
    return (
        <div>
            <div>
                
            </div>
        </div>
    );
};

export default Mainbody;