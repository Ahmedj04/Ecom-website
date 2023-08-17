import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoSearch } from "react-icons/go";


function Header({setMenu}) {
    return (
        <header>
            <div className='px-4 mx-4 flex justify-between'>

                {/* menu options for lg screen */}
                <div className='hidden lg:block my-auto lg:px-10 lg:w-5/12'>
                    <ul className='flex text-lg'>
                        <li><a href='#home' className='pr-5 cursor-pointer hover:underline'>Home</a></li>
                        <li><a href='#rooms' className='pr-5 cursor-pointer hover:underline'>Rooms</a></li>
                        <li><a href='#photos' className='pr-5 cursor-pointer hover:underline'>Gallery</a></li>
                        <li><a href='#services' className='pr-5 cursor-pointer hover:underline'>Services</a></li>
                    </ul>
                </div>


                {/* logo */}
                <div className='px-3 lg:w-5/12'>
                    <div className='py-5 lg:pl-5'>
                        <a><img className='w-28 md:w-32 lg:w-36' src='./logo.png'></img></a>
                    </div>

                </div>

                {/* options */}
                <div className='px-0 my-auto flex justify-between lg:w-2/12 lg:justify-end'>
                    <i className='mr-5'><MdOutlineShoppingCart size={25} /></i>
                    {/* menu option for sm & md screen */}
                    <i className='lg:hidden' onClick={() => setMenu(1)}><RxHamburgerMenu size={25} /></i>
                    <i className='hidden lg:block'><GoSearch size={25} /></i>
                </div>

            </div>

        </header>
    )
}

export default Header