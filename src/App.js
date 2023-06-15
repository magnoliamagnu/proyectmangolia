import { useState } from "react";

import { FiTruck,FiUsers,FiMenu,FiPlusSquare,FiX,FiSearch} from "react-icons/fi";
import { RiArrowDownSLine,RiDeleteBin5Line } from "react-icons/ri";

import Sidebar from "./components/shared/sidebar";


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

  const classBtn= " text-[#FD0426] py2 px-4 rounded-xl border border-gray-500";

  return (
  <div className="bg-[#A4A4B5] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
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
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8  pb:20">
        <div className="lg:col-span-6 md:p-8 p-4">
          {/*Header... */}
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
             {/*Contenido de title... */}
             <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl text-black-300">Home</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#010115] py2 px-4 rounded-lg"><RiArrowDownSLine /> Tienda 
              </button>
            </div>
             {/*Contenido.. */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {/*card.. */}
              <div className="bg-[#010115] p-8  rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                <img src="perchero.jpg" className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"/>
                <p className="text-xl"> Camisas de Hombre</p>
                <span className="text-gray-400">€100</span>
                <p className="text-gray-600">Unidades:20</p>
              </div>
              {/*card.. */}
              <div className="bg-[#010115] p-8  rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                <img src="perchero.jpg" className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"/>
                <p className="text-xl"> Camisas de Hombre</p>
                <span className="text-gray-400">€100</span>
                <p className="text-gray-600">Unidades:20</p>
              </div>
              {/*card.. */}
              <div className="bg-[#010115] p-8  rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                <img src="perchero.jpg" className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"/>
                <p className="text-xl"> Camisas de Hombre</p>
                <span className="text-gray-400">€100</span>
                <p className="text-gray-600">Unidades:20</p>
              </div>
              {/*card.. */}
              <div className="bg-[#010115] p-8  rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                <img src="perchero.jpg" className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"/>
                <p className="text-xl"> Camisas de Hombre</p>
                <span className="text-gray-400">€100</span>
                <p className="text-gray-600">Unidades:20</p>
              </div>
              {/*card.. */}
              <div className="bg-[#010115] p-8  rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                <img src="perchero.jpg" className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"/>
                <p className="text-xl"> Camisas de Hombre</p>
                <span className="text-gray-400">€100</span>
                <p className="text-gray-600">Unidades:20</p>
              </div>
              {/*card.. */}
              <div className="bg-[#010115] p-8  rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                <img src="perchero.jpg" className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"/>
                <p className="text-xl"> Camisas de Hombre</p>
                <span className="text-gray-400">€100</span>
                <p className="text-gray-600">Unidades:20</p>
              </div>
          
            </div>
            </div>
        <div 
        className={`lg:col-span-2  fixed  top-0 bg-[#010115] w-full lg:w-96 lg:right-0 h-full 
        transition-all ${
          showOrder ? "right-0" : "-right-full"
          } `}
           >
          {/*orden */}
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
          <FiMenu onClick={toggleOrder} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#A4A4B5] rounded-full text-xl"/> 
          <h1 className="text-2xl my-4">Orden #1994</h1>
          {/*Menu de orden */}
          <div className="flex items-cent gap-4  flex-wrap mb-8">
            <button className="bg-[#FD0426] text-white py2 px-4 rounded-xl">Datos</button>
            <button className={classBtn}>Direccion</button>
            <button className={classBtn}>Pago</button>
          </div>
          {/*Card */}
           <div>
            <div className="grid grid-cols-6 mb-4 p-4">
              <h5 className="col-span-4">Articulos</h5>
              <h5>Cantidad</h5>
              <h5>Precio</h5>
            </div>
            {/*Productos */}
            <div className="h-[400px] md:h[700px] lg:h[540px] overflow-scroll">
             {/*Productos */}
            <div className="bg-[#A4A4B5] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-2 ">
              {/*Descripcion  de productos*/}
              <div className="col-span-4 flex items-center gap-3">
                <img src="perchero.jpg" className="w-10 h-10 object-cover" />
                <div>
                <h5 className="text-sm">Camisa de Hombre</h5>
                <p className="text-xs text-gray-500">€100</p>
                </div>
              </div>
              {/*Cantidad */}
              <div className="text-center">
                <span>2</span>
              </div>
              {/*Precio */}
              <div className="text-center">
                <span>€100</span>
              </div>
            </div>
             {/*Nota */}
             <div className="grid grid-cols-6 items-center gap-2">
              <form className="col-span-5">
                <input type="text" 
                className="bg-[#010115] py-2 px-4 rounded-lg outline-none"
                placeholder="Nota de la orden....."
                />
              </form>
              <div className="col-span-1 text-center">
                <button className="border border-red-500 p-2 rounded-lg">
                  <RiDeleteBin5Line className="text-red-500"/>
                </button>
              </div>
             </div>
          </div>
           {/*Productos */}
           <div className="bg-[#A4A4B5] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-2 ">
              {/*Descripcion  de productos*/}
              <div className="col-span-4 flex items-center gap-3">
                <img src="perchero.jpg" className="w-10 h-10 object-cover" />
                <div>
                <h5 className="text-sm">Camisa de Hombre</h5>
                <p className="text-xs text-gray-500">€100</p>
                </div>
              </div>
              {/*Cantidad */}
              <div className="text-center">
                <span>2</span>
              </div>
              {/*Precio */}
              <div className="text-center">
                <span>€100</span>
              </div>
            </div>
             {/*Nota */}
             <div className="grid grid-cols-6 items-center gap-2">
              <form className="col-span-5">
                <input type="text" 
                className="bg-[#010115] py-2 px-4 rounded-lg outline-none"
                placeholder="Nota de la orden....."
                />
              </form>
              <div className="col-span-1 text-center">
                <button className="border border-red-500 p-2 rounded-lg">
                  <RiDeleteBin5Line className="text-red-500"/>
                </button>
              </div>
             </div>
          </div>
           {/*Productos */}
           <div className="bg-[#A4A4B5] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-2 ">
              {/*Descripcion  de productos*/}
              <div className="col-span-4 flex items-center gap-3">
                <img src="perchero.jpg" className="w-10 h-10 object-cover" />
                <div>
                <h5 className="text-sm">Camisa de Hombre</h5>
                <p className="text-xs text-gray-500">€100</p>
                </div>
              </div>
              {/*Cantidad */}
              <div className="text-center">
                <span>2</span>
              </div>
              {/*Precio */}
              <div className="text-center">
                <span>€100</span>
              </div>
            </div>
             {/*Nota */}
             <div className="grid grid-cols-6 items-center gap-2">
              <form className="col-span-5">
                <input type="text" 
                className="bg-[#010115] py-2 px-4 rounded-lg outline-none"
                placeholder="Nota de la orden....."
                />
              </form>
              <div className="col-span-1 text-center">
                <button className="border border-red-500 p-2 rounded-lg">
                  <RiDeleteBin5Line className="text-red-500"/>
                </button>
              </div>
             </div>
          </div>
           {/*Productos */}
           <div className="bg-[#A4A4B5] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-2 ">
              {/*Descripcion  de productos*/}
              <div className="col-span-4 flex items-center gap-3">
                <img src="perchero.jpg" className="w-10 h-10 object-cover" />
                <div>
                <h5 className="text-sm">Camisa de Hombre</h5>
                <p className="text-xs text-gray-500">€100</p>
                </div>
              </div>
              {/*Cantidad */}
              <div className="text-center">
                <span>2</span>
              </div>
              {/*Precio */}
              <div className="text-center">
                <span>€100</span>
              </div>
            </div>
             {/*Nota */}
             <div className="grid grid-cols-6 items-center gap-2">
              <form className="col-span-5">
                <input type="text" 
                className="bg-[#010115] py-2 px-4 rounded-lg outline-none"
                placeholder="Nota de la orden....."
                />
              </form>
              <div className="col-span-1 text-center">
                <button className="border border-red-500 p-2 rounded-lg">
                  <RiDeleteBin5Line className="text-red-500"/>
                </button>
              </div>
             </div>
          </div>
            </div>
         
          </div>
         {/*Submit payment */}
         <div className="bg-[#A4A4B5] absolute w-full bottom-0 left-0 p-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Descuento</span>
              <span>€0 </span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-600">Sub-total</span>
              <span>€500 </span>
            </div>
            {/*Boton de pagar */}
            <div>
              <button className="bg-[#FD0426] w-full p-2 px-4 ">Continua la compra</button>
            </div>
         </div>
          </div>
        
          </div>
      </main>

  </div>
  );
}
export default App;