import { useState } from "react";

import { FiTruck,FiUsers,FiMenu,FiPlusSquare,FiX,FiSearch} from "react-icons/fi";
import { RiArrowDownSLine, } from "react-icons/ri";

import Card from "./components/shared/card";
import Sidebar from "./components/shared/sidebar";
import Header from "./components/Header";
import ItemListContainer from "./ItemListContainer";


function App(){
  const[showMenu, setShowMenu] = useState (false);
  const [showOrder, setShowOrder] = useState (false);

  const toggleMenu =()=>{
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
  <div className="bg-[#A4A4B5] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Card showOrder={showOrder} setShowOrder={setShowOrder} />
      {/*Menu Movil */}
      <nav className="bg-[#010115] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2  px-8 flex items-center 
      justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2"> <FiUsers /> </button>
        <button className="p-2"> <FiPlusSquare/> </button>
        <button onClick={toggleOrder} className="p-2"> <FiTruck /> </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <FiX /> : <FiMenu/>}
          
           </button>
      </nav>
      <main className="lg:pl-32 pr-96 pb:20">
        <div className="md:p-8 p-4">
          {/*Header... */}
           <Header />
             {/*Contenido de title... */}
             <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl text-black-300">Home</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#010115] py2 px-4 rounded-lg"><RiArrowDownSLine /> Tienda 
              </button>
            </div>
             {/*Contenido.. */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {/*ItemListContainer .. */}
              <ItemListContainer 
              img="perchero.jpg" 
              descrption=" Camisas de Hombre" 
              price="€100" 
              inventory="20" 
              />
               {/*ItemListContainer .. */}
               <ItemListContainer 
              img="vestido.jpg" 
              descrption=" Vestido" 
              price="€80" 
              inventory="100" 
              />
               {/*ItemListContainer .. */}
               <ItemListContainer 
              img="tienda.jpg" 
              descrption=" Camisas Infantil" 
              price="€50" 
              inventory="50" 
              />
                {/*ItemListContainer .. */}
                <ItemListContainer 
              img="perchero.jpg" 
              descrption=" Camisas de Hombre" 
              price="€100" 
              inventory="20" 
              />
               {/*ItemListContainer .. */}
               <ItemListContainer 
              img="vestido.jpg" 
              descrption=" Vestido" 
              price="€80" 
              inventory="100" 
              />
               {/*ItemListContainer .. */}
               <ItemListContainer 
              img="tienda.jpg" 
              descrption=" Camisas Infantil" 
              price="€50" 
              inventory="50" 
              />
                {/*ItemListContainer .. */}
                <ItemListContainer 
              img="perchero.jpg" 
              descrption=" Camisas de Hombre" 
              price="€100" 
              inventory="20" 
              />
               {/*ItemListContainer .. */}
               <ItemListContainer 
              img="vestido.jpg" 
              descrption=" Vestido" 
              price="€80" 
              inventory="100" 
              />
               {/*ItemListContainer .. */}
               <ItemListContainer 
              img="tienda.jpg" 
              descrption=" Camisas Infantil" 
              price="€50" 
              inventory="50" 
              />
               

              

              

              
          
            </div>
            </div>
       
      </main>

  </div>
  );
}
export default App;