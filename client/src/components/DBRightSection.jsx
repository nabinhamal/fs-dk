import React from 'react'
import {DBHeader, DBHome, DBItems, DBNewItem, DBOrders, DBUsers, Profile} from '../components';
import { Routes ,Route } from 'react-router-dom';

const DBRightSection = () => {
  return (
    <div className='flex flex-col py-12 px-12 flex-1 h-full '>
    <DBHeader/>
    <div className="flex flex-col flex-1 overflow-y-scroll scrollbar-none ">
      <Routes>
        <Route path="/home" element={<DBHome/>}/>
        <Route path="/items" element={<DBItems/>}/>
        <Route path="/newItem" element={<DBNewItem/>}/>
        <Route path="/users" element={<DBUsers/>}/>
        <Route path="/orders" element={<DBOrders/>}/>
        

       
      </Routes>
    </div>
    </div>
    
  )
}

export default DBRightSection