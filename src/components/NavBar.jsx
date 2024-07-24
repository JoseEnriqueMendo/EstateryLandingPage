// import React from 'react'
import { BsHouseHeartFill } from 'react-icons/bs';
import { RiArrowDownWideFill } from 'react-icons/ri';

const NavBar = () => {
  return (
    <nav className="h-[10vh] w-full bg-[#e9e8f7]  flex px-14 py-4 overflow-hidden font-plusUltra font-semibold justify-between sticky top-0 z-50">
      <div className=" flex  items-center gap-9">
        <span className="flex flex-row gap-2 items-center cursor-pointer hover:pb-0.5">
          <BsHouseHeartFill className="text-secundary opacity-100 " size={'30px'} />
          <p className=" font-bold text-xl">Estatery</p>
        </span>
        <a className="cursor-pointer hover:font-bold">Renta</a>
        <a className="cursor-pointer hover:font-bold">Compra</a>
        <a className="cursor-pointer hover:font-bold">Venta</a>
        <button className="flex flex-row gap-1 items-center cursor-pointer hover:font-bold">
          <p>Administrar propiedad</p>
          <RiArrowDownWideFill className="text-dark" />
        </button>
        <span className="flex flex-row gap-1 items-center cursor-pointer hover:font-bold">
          <p>Recursos</p>
          <RiArrowDownWideFill className="text-dark" />
        </span>
      </div>
      <div className="flex gap-3">
        <button className="p-3 rounded-md  border-[3px] flex items-center cursor-pointer hover:bg-[#e3e2e2]">
          Login
        </button>
        <button className=" cursor-pointer bg-secundary p-3 rounded-md text-white flex items-center hover:bg-secundaryDark">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
