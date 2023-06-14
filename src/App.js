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
          <header className="p-4">
          <div>
            <h1 className="text-2xl">Juan perez Vintage</h1>
            <p>15-05-2023</p>
            </div>
            <form>
              <div>
                <FiSearch />
              <input type="text" className="bg-white" />
              </div>
            </form>
            </header>
            </div>
        <div className="lg:col-span-2  fixed lg:static right-0">carrito</div>
      </main>

  </div>
  );
}
export default App;