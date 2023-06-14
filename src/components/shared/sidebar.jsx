import React from "react";
import { RiHome6Line, } from "react-icons/ri";
import { FiMail,FiUsers,FiTruck,FiSettings,FiInstagram,FiLogOut} from "react-icons/fi";


const Sidebar =(props) =>{
    const {showMenu} = props;

    return (
        <div className={`bg-[#010115] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl 
        rounded-br-xl z-50 transition-all ${
            showMenu ? "left-0" : "-left-full"
            } `}
            >
            
            <div>
            <ul className="pl-4">
                <li>
                <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Juan Perez</h1>
                </li>
                <li className="bg-[#A4A4B5] p-4 rounded-tl-xl rounded-bl-xl">
                    <a href="#" className="bg-[#FD0426] p-4 flex justify-center rounded-xl text-white" > 
                    <RiHome6Line className="text-2xl" /> 
                    </a>
                </li>
                <li className="hover:bg-[#A4A4B5] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#FD0426] p-4 flex justify-center rounded-xl text-[#FD0426] group-hover:text-white
                    transition-colors" > 
                    <FiUsers className="text-2xl" /> 
                    </a>
                </li>
                <li className="hover:bg-[#A4A4B5] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#FD0426] p-4 flex justify-center rounded-xl text-[#FD0426] group-hover:text-white
                    transition-colors" > 
                    <FiMail className="text-2xl" /> 
                    </a>
                </li>
                <li className="hover:bg-[#A4A4B5] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#FD0426] p-4 flex justify-center rounded-xl text-[#FD0426] group-hover:text-white
                    transition-colors" > 
                    <FiTruck className="text-2xl" /> 
                    </a>
                </li>
                <li className="hover:bg-[#A4A4B5] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#FD0426] p-4 flex justify-center rounded-xl text-[#FD0426] group-hover:text-white
                    transition-colors" > 
                    <FiSettings className="text-2xl" /> 
                    </a>
                </li>
                <li className="hover:bg-[#A4A4B5] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#FD0426] p-4 flex justify-center rounded-xl text-[#FD0426] group-hover:text-white
                    transition-colors" > 
                    <FiInstagram className="text-2xl" /> 
                    </a>
                </li>
                
            </ul>
            </div>
            <div>
           <ul className="pl-4">     
            <li className="hover:bg-[#A4A4B5] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#FD0426] p-4 flex justify-center rounded-xl text-[#FD0426] group-hover:text-white
                    transition-colors" > 
                    <FiLogOut className="text-2xl" /> 
                    </a>
                </li>
            </ul>    
                </div>
        </div>
    );
};

export default Sidebar;