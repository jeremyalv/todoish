import React from 'react';
import Checkbox from './Checkbox';

const Task = ({ task }) => {
    const [finished, setFinished] = React.useState(false);

    const handleFinished = () => {
        setFinished(!finished);
    };
    
    return (  
        <div className='flex items-center w-full h-20 divide-y'>
            {/* Checkbox component */}
            <div className='self-start mt-4'>
                <Checkbox onChange={handleFinished} checked={finished} />
            </div>
            
            <div className='flex flex-row w-full'>
                <div className='flex flex-col ml-4 mr-2 justify-start items-start'>
                    {/* Title */}
                    <div className='text-lg'>
                        {task.title}
                    </div>

                    <div className='text-sm text-gray-500'>
                        {task.description}
                    </div>

                    {/* Create Date */}
                    {
                    new Date().getTime() >= Date.parse(task.due_date)
                        ?
                        <div className="text-sm text-red-400">
                            {task.due_date}
                        </div>
                        :
                        <div className='text-sm text-gray-400'>
                            {task.due_date}
                        </div>
                    }
                </div>

                {/* Category */}
                <div className='text-sm text-gray-400 ml-auto self-end'>
                    {task.category}
                </div>
            </div>
        </div>
    );
}
 
export default Task;