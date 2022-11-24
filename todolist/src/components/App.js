import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import TaskFeed from './Task/TaskFeed';

const App = () => {
    return (
    <div className='px-4 py-2 h-screen w-screen'>
        <Navbar />
        <Sidebar />
        <TaskFeed />
    </div>
    );

};

export default App;