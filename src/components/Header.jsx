import React from "react";
import {FiSearch} from "react-icons/fi";


const Header = () => {
    return (
        <header>
        {/*titulo en Buscador... */}
       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
     <div>
       <h1 className="text-2xl text-black-300">Juan perez Vintage</h1>
       <p className="text-black-500">15-05-2023</p>
       </div>
       <form>
         <div className="w-full relative">
           <FiSearch className="bg-[#A4A4B5] absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"/>
         <input type="text" className="bg-[#010115] w-full py-2 pl-10 pr-4 text-gray-300 rounded-lgb 
         outline-none" placeholder="Buscar" />
         </div>
       </form>
       </div>
        {/*pestañas... */}
        <nav className="text-black-300 flex items-center justify-between md:justify-start md:gap-8  border-b mb-6">
         <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#FD0426] before:left-0 before:rounded-full
          before:-bottom-[1px] text-[#FD0426] ">Home</a>
         <a href="#" className="py-2 pr-4">Mujer</a>
         <a href="#" className="py-2 pr-4">Hombre</a>
         <a href="#" className="py-2 pr-4">Niño</a>
         
        </nav>
       
       </header>
    )
}
export default Header;