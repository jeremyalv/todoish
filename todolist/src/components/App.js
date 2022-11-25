import React from 'react';
import Navbar from './Navbar/Navbar';
import TaskFeed from './Task/TaskFeed';
import NavbarControl from './Navbar/NavbarControl';

const App = () => {
    return (
    <div className='px-6 py-4 h-screen w-screen'>
        <Navbar />
        <TaskFeed />
        <NavbarControl />
    </div>
    );

};

export default App;