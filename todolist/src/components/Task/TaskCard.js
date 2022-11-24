import React from 'react';
import Checkbox from './Checkbox';

const Task = (props) => {
    const [finished, setFinished] = React.useState(false);
    const today = new Date();
    const taskDueDate = Date.parse();

    const handleFinished = () => {
        setFinished(!finished);
    };
    
    return (  
        <div className='flex items-center w-full'>
            {/* Checkbox component */}
            <Checkbox onClick={handleFinished} checked={finished} />
            
            <div className='flex flex-row w-full'>
                <div className='flex flex-col ml-4 mr-2 justify-start items-start'>
                    {/* Title */}
                    <div className='text-xl'>
                        {props.task.title}
                    </div>

                    {/* Create Date */}
                    {
                        today > props.task.created_at
                    }
                    <div className="{}">
                        {props.task.created_at}
                    </div>
                </div>

                {/* Category */}
                <div className='text-gray-400 ml-auto self-end'>
                    {props.task.category}
                </div>
            </div>
        </div>
    );
}
 
export default Task;