import React from "react";
import { FiMenu,} from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";



const card = (props) => {
        const {showOrder, setShowOrder} = props
    return (
        <div 
        className={`lg:col-span-2  fixed  top-0 bg-[#010115] w-full lg:w-96 lg:right-0 h-full 
        transition-all z-50 ${
          showOrder ? "right-0" : "-right-full"
          } `}
           >
          {/*orden */}
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
          <FiMenu onClick={ () => setShowOrder (false) } className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#A4A4B5] rounded-full text-xl"/> 
          <h1 className="text-2xl my-4">Orden #1994</h1>
          {/*Menu de orden */}
          <div className="flex items-cent gap-4  flex-wrap mb-8">
            <button className="bg-[#FD0426] text-white py2 px-4 rounded-xl">Datos</button>
            <button className=" text-[#FD0426] py2 px-4 rounded-xl border border-gray-500">Direccion</button>
            <button className=" text-[#FD0426] py2 px-4 rounded-xl border border-gray-500">Pago</button>
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
    )
}

export default card;