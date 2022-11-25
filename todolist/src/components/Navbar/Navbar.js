import React from 'react';
import Header from './Header';
import Profile from './Profile';
import NavbarControl from './NavbarControl';

const user = {
    "username": "testuser",
    "email": "test@gmail.com"
}

const Navbar = () => {
    return (  
        <div className='flex pt-4 pb-2 px-4 mb-2'>
            <Header />
            <div className='ml-auto'>
                <Profile user={user} />
            </div>
            {/* <NavbarControl /> */}
        </div>
    );
}
 
export default Navbar;