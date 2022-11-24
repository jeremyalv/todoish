import React from 'react';
import TaskCard from './TaskCard';
import data from '../../data/tasks.json';


const TaskFeed = () => {
    return (  
        <div className='flex flex-col items-center'>
            {data.map(task => 
                    <TaskCard key={task.id} task={task} />
            )}
        </div>
    );
}

export default TaskFeed;
