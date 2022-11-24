import React from 'react';

const Checkbox = (props) => {
    return (  
        <div className='flex justify-center items-center'>
            <input type="checkbox" checked={props.checked ? "true" : "false"} 
            className="w-6 h-6 text-blue-600 bg-white border border-gray-500 rounded-full 
            focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        </div>
    );
}
 
export default Checkbox;