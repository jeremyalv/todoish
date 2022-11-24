import React from 'react';
import Profile from './Profile';

const user = {
    "username": "testuser",
    "email": "test@gmail.com"
}

const Navbar = () => {
    return (  
        <>
            <div>
                <div className='flex pt-4 pb-2 px-4'>
                    <div className='text-2xl text-orange-500 font-bold'>
                        Todoish
                    </div>
                    <div className='ml-auto'>
                        <Profile user={user} />
                    </div>
                </div>

                {/* <div className='bg-gray-200 h-0.5'></div> */}
            </div>
        </>
    );
}
 
export default Navbar;