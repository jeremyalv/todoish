import React from 'react';
import CategoryDrawer from './CategoryDrawer';
import CreateTask from './CreateTask';
import SearchTask from './SearchTask';

const NavbarControl = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const handleOpened = () => {
        setOpenDrawer(!openDrawer);
    };
    
    return (  
        <div className='flex justify-between items-center w-screen mb-4 fixed left-0 right-0 top-auto bottom-0 md:top-0 md:bottom-auto'>
            <div className='ml-4 mr-2'>
                <CategoryDrawer opened={openDrawer} onClick={handleOpened} />
            </div>
            <CreateTask />
            <div className='ml-2 mr-4'>
                <SearchTask phoneScreen={true} />
            </div>
        </div>
    );
}
 
export default NavbarControl;