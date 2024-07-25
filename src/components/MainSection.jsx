import { BsHouseHeartFill } from 'react-icons/bs';
import { HiChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaKey } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { useState } from 'react';
const MainSection = () => {
  const [type, SetType] = useState('rent');

  return (
    <div className="max-w-[100vw] max-h-[90vh]  h-[90vh] bg-[#E3E1F8] font-plusUltra flex flex-row  justify-around overflow-hidden">
      <div className="min-w-1/2 w-1/2 pl-[7%] pr-[4%] flex flex-col gap-6">
        <p className="font-bold text-6xl text-textDark mt-[8%] ">
          Compra, alquila o vende tu propiedad fácilmente
        </p>
        <p className="text-textDark font-semibold ">
          Una gran plataforma para comprar, vender o incluso alquilar tus propiedades sin
          comisiones.
        </p>
        <div>
          <div className="bg-white z-40 w-60 h-10 rounded-t-md border-b flex flex-row items-center font-semibold justify-around ">
            <p
              className={
                'cursor-pointer flex  h-full  items-center justify-center  w-1/3 ' +
                (type === 'rent' ? 'text-secundary border-b-2 border-secundary' : '')
              }
              onClick={() => SetType('rent')}
            >
              Rentar
            </p>
            <p
              className={
                'cursor-pointer flex  h-full  items-center justify-center  w-1/3  ' +
                (type === 'buy' ? 'text-secundary border-b-2 border-secundary ' : '')
              }
              onClick={() => SetType('buy')}
            >
              Comprar
            </p>
            <p
              className={
                'cursor-pointer flex  h-full  items-center justify-center  w-1/3  ' +
                (type === 'sell' ? 'text-secundary border-b-2 border-secundary ' : '')
              }
              onClick={() => SetType('sell')}
            >
              Vender
            </p>
          </div>
          <div className="bg-white z-40 w-full h-28 rounded-b-md rounded-r-md flex flex-row justify-around p-4 items-center">
            <span className="flex flex-col gap-1">
              <p className="text-textDark opacity-60 font-bold text-xs">Ubicación</p>
              <p className="text-textDark font-bold">Barcelona, Spain</p>
            </span>
            <span className="bg-ligth w-[1px] h-1/2"> </span>
            <span className="flex flex-col gap-2">
              <p className="text-textDark opacity-60 font-semibold text-xs">Cuando</p>
              <p className="text-textDark font-bold">Select Move-in Date</p>
            </span>
            <span className="bg-ligth w-[1px] h-1/2"> </span>
            <button className="cursor-pointer bg-secundary h-[60%] p-4 rounded-md text-white flex items-center hover:bg-secundaryDark">
              Explorar propiedades
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-2 w-full ">
          <div className="flex flex-col w-[200px] gap-4 items-start">
            <span className="relative">
              <FaPeopleGroup
                size={'60px'}
                className="text-white bg-[#cecce4] rounded-full p-2 border-white border-2"
              />
              <FaKey
                className="absolute rounded-md bg-secundary text-white p-1 top-3/4 left-[55%]"
                size={'20px'}
              />
            </span>
            <span className="flex flex-col items-center">
              <p className="text-secundary font-bold flex flex-row items-center text-center">
                +50.000 inquilinos
              </p>
              <p className="text-textDark font-semibold text-xs">Cree en nuestro servicio</p>
            </span>
          </div>
          <div className="flex flex-col w-[200px] gap-4 items-start">
            <span className="relative">
              <HiOutlineBuildingOffice2
                size={'60px'}
                className="text-white bg-[#cecce4] rounded-full p-2 border-white border-2"
              />
              <FaMagnifyingGlass
                className="absolute rounded-md bg-secundary text-white p-1 top-3/4 left-[55%]"
                size={'20px'}
              />
            </span>
            <span className="flex flex-col items-center">
              <p className="text-secundary font-bold flex flex-row items-start ">
                +10.000 propiedades
              </p>
              <p className="text-textDark font-semibold text-xs">y casa lista para habitar</p>
            </span>
          </div>
        </div>
      </div>
      <div className="min-w-1/2 w-1/2 relative overflow-hidden flex  ">
        <img src={'house21.svg'} className=" object-cover  h-[700px]   " />

        <div className="absolute top-[8%] bg-white min-h-64 w-[35%] rounded-md  flex flex-col gap-3">
          <div className="flex flex-row items-center p-4 gap-4 w-full ">
            <img
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg/1200px-Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg'
              }
              className="rounded-full object-cover size-[60px]"
            />
            <span className="flex flex-col ">
              <p className="text-textDark font-bold text-xl">Manuel Villa</p>
              <p className="text-textDark opacity-60 font-semibold">Inquilino</p>
              <span className="flex flex-row items-center gap-1 mt-1">
                <p className="text-textDark opacity-60 font-semibold text-[11px]">
                  Moved with
                </p>
                <BsHouseHeartFill size={'15px'} className="text-secundary" />
                <p className="font-bold text-[11px]">Estatery</p>
              </span>
            </span>
          </div>
          <span className="flex flex-row px-4 w-full   gap-2">
            <HiChatBubbleOvalLeftEllipsis size={'120px'} className="scale-x-[-1]  h-fit" />
            <p className="text-textDark  font-semibold text-xs">
              Me encantó lo fluida que fue la mudanza y finalmente conseguimos la casa que
              queríamos.
            </p>
          </span>
          <span className="flex flex-row mx-auto w-[85%] gap-2 py-4   border-t-2  items-center justify-around">
            <span className="items-center flex flex-col">
              <p className="text-textDark  font-bold text-2xl">$1,500</p>
              <p className="text-textDark opacity-60 font-semibold text-xs">Saved up to</p>
            </span>
            <span className="items-center flex flex-col">
              <p className="text-textDark  font-semibold text-2xl">-24 hrs</p>
              <p className="text-textDark opacity-60 font-semibold text-xs">Process time</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
