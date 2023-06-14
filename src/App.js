import { useState } from "react";

import { FiTruck,FiUsers,FiMenu,FiPlusSquare,FiX,FiSearch} from "react-icons/fi";

import Sidebar from "./components/shared/sidebar";


function App(){
  const[showMenu, setShowMenu] = useState (false);
  const [showOrden, setShowOrder] = useState (false);

  const toggleMenu =()=>{
    setShowMenu(!showMenu);
  };

  return (
  <div className="bg-[#A4A4B5] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/*Menu Movil */}
      <nav className="bg-[#010115] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2  px-8 flex items-center 
      justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2"> <FiUsers /> </button>
        <button className="p-2"> <FiPlusSquare/> </button>
        <button className="p-2"> <FiTruck /> </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <FiX /> : <FiMenu/>}
          
           </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6 ">
          {/*Header... */}
          <header className="p-4">
             {/*titulo en Buscador... */}
            <div className="flex flex-col gap-4 mb-6">
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
             <nav className="text-black-300 flex items-center justify-between border-b">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#FD0426] before:left-0 before:rounded-full
               before:-bottom-[1px] text-[#FD0426] ">Home</a>
              <a href="#" className="py-2 pr-4">Mujer</a>
              <a href="#" className="py-2 pr-4">Hombre</a>
              <a href="#" className="py-2 pr-4">Niño</a>
              <a href="#" className="py-2 pr-4">tu cuenta</a>
             </nav>
            </header>
            </div>
        <div className="lg:col-span-2  fixed lg:static right-0">carrito</div>
      </main>

  </div>
  );
}
export default App;