"use client";
import React, { useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import './admin.css';


const Admin = () => {
    const[open, setOpen] = useState(true);
    const Menus = [
        {title:"Trang chủ", src:"/admin"},
        {title:"Khách hàng", src:"/components/Khachhang/Khachhang.html"},
        {title:"Dịch vụ", src:"/components/Dichvu/Dichvu.html"},
        {title:"Sự kiện", src:"/components/Sukien/Sukien.html"}, 
    ]
    return (
        <div className='flex'>
            <div className={`${open ? "w-72" : "w-17"} duration-300 h-screen p-5 pt-8 bg-[#4b5563] relative`}>
               <BsArrowLeft className={`absolute cursor-pointer rounded-full 
               -right-3 top-9 w-7 border-2 border-[#6b7280] ${!open && "rotate-180"}`} 
               onClick={()=>setOpen(!open)}/>
               <div className='flex gap-x-4 items-center'>
                <MdAccountCircle className='text-4xl'/>
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 
                ${!open && "scale-0"}`}>Admin</h1>
               </div>
               <ul className='pt-6'>
                {Menus.map((menu, index)=>(
                    <li key={index} className='text-white text-sm flex items-center gap-x-4 
                    cursor-pointer p-2 hover:bg-gray-500 rounded-md'>
                        <RiDashboardFill className='text-2xl'/>
                        <a className={`${!open && "hidden"} origin-left duration-200 text-sm`} 
                        href={menu.src}>{menu.title}</a>
                    </li>
                ))}
               </ul>
            </div>
            <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
                <h2 className='text-center'>Welcome to Admin!</h2>
            </div>
        </div>
  );
};
export default Admin;