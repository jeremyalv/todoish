import React from 'react';

const CreateTask = () => {
    return (  
        <>
            <button type="button" className="focus:outline-none text-white bg-red-600 hover:bg-red-800 
            focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-4
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>

        </>
    );
}
 
export default CreateTask;