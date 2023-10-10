import React from 'react'

import Header from './Header'
import {  menubg } from '../assets'


const Menu = () => {
    return (
        <div>
            <Header className="fixed top-0 left-0 right-0 bg-primary  p-4 shadow" />
            <div className="pt-8"></div>
            <div className="flex items-center justify-center bg-lightOverlay h-78">
                <div className="max-w-2xl p-4 pt-8 bg-white rounded shadow-lg relative mt-16">
                    <img
                        src={menubg}
                        alt="Restaurant Menu"
                        className="w-full h-auto "
                    />
                    <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white"></div>
                </div>
            </div>
        </div>
    );
};

    
    
     
  export default Menu;