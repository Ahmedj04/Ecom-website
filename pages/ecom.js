import React, { useState } from 'react'
import Header from '@/components/Header'
import { AiOutlineClose } from "react-icons/ai";


function Ecom() {

    const [menu, setMenu] = useState(0)

    return (
        <main>
            <Header 
                setMenu={setMenu}
            />

            {/* menu for small screen */}
            <div className={`transition-transform duration-500 ease-in-out transform ${menu === 1 ? 'translate-x-0' : '-translate-x-full'} fixed inset-0 z-50`}>
                {/* Dark background */}
                <div className={`absolute inset-0 bg-black opacity-70 transform transition-transform duration-500 ease-in-out ${menu === 1 ? 'translate-x-0' : '-translate-x-full'}`}></div>

                {/* Content */}
                <div className={`absolute inset-y-0 left-0 w-8/12 bg-custom-brown p-4 transform transition-transform duration-1000 ease-in-out ${menu === 1 ? 'translate-x-0 delay-300' : '-translate-x-full'}`}>
                    <div className='flex justify-between'>
                        <div className=' inline-block'>
                            <a><img className='w-28' src='./logo.png'></img></a>
                        </div>
                        <button onClick={() => setMenu(0)}><AiOutlineClose /></button>
                    </div>

                    <div>
                        <ul className='pt-10 text-lg' onClick={() => setMenu(0)}>
                            <li className='pb-2'><a href='#about'>About</a></li>
                            <li className='pb-2'><a href='#rooms'>Rooms</a></li>
                            <li className='pb-2'><a href='#photos'>Gallery</a></li>
                            <li><a href='#services'>Services</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Ecom