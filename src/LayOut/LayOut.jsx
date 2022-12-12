import React from 'react';
import { Outlet } from 'react-router-dom';


const LayOut = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Outlet></Outlet>
            
        </div>
    );
};

export default LayOut;