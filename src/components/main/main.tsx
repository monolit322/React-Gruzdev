import React from 'react';
import LeftSideBar from './leftsidebar/leftsidebar';
import TableTask from './tabletask/tabletask';
import './style.css'

const Main = () => {
    return (
        <div className='main'>
            <LeftSideBar/>
            <TableTask/>
        </div>
    );
};

export default Main;