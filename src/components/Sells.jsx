import { useState } from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { TiKeyOutline } from 'react-icons/ti';
import { IoWalletOutline } from 'react-icons/io5';
import { RiHomeLine } from 'react-icons/ri';
import houses from '../constants/houses.json';
import { CardSells } from './Cards';

const Sells = () => {
  const [housesArray, setHousesArray] = useState(
    houses.filter((item) => item.type === 'rent')
  );
  const [type, setType] = useState('rent');

  const onhandleClik = (type) => {
    setType(type);
    setHousesArray(houses.filter((item) => item.type === type));
  };

  return (
    <div className="max-w-[100vw] min-h-[75vh] bg-[#ffffffcf] font-plusUltra flex flex-col items-center gap-3.5 p-10 ">
      <p className="font-bold text-3xl max-sm:text-center">Basado según tu ubicación</p>
      <p className="text-[14px] opacity-65 max-sm:text-center">
        Algunas de nuestras propiedades seleccionadas cerca de su ubicación.
      </p>
      <div className="flex flex-row items-center justify-between w-3/4  mt-5  max-lg:flex-col gap-5  max-xl:w-[85%]  max-sm:w-full">
        <div className=" flex flex-row justify-around gap-2  w-[33%] max-xl:w-[40%] overflow-hidden bg-[#F2F1FC] p-2 rounded-md items-center border-[#cdc9efc7]  border max-lg:w-full">
          <span
            className={
              'cursor-pointer flex flex-row gap-1 items-center ' +
              (type === 'rent'
                ? 'bg-white py-1  px-2 rounded-md  text-secundary font-bold'
                : 'bg-transparent text-textLigth')
            }
            onClick={() => onhandleClik('rent')}
          >
            <TiKeyOutline size={'22px'} />
            <p>Rentar</p>
          </span>
          <span
            className={
              'cursor-pointer flex flex-row gap-1 items-center ' +
              (type === 'buy'
                ? 'bg-white py-1  px-2 rounded-md  text-secundary font-bold'
                : 'bg-transparent text-textLigth')
            }
            onClick={() => onhandleClik('buy')}
          >
            <IoWalletOutline size={'22px'} />
            <p>Comprar</p>
          </span>
          <span
            className={
              'cursor-pointer flex flex-row gap-1 items-center ' +
              (type === 'sell'
                ? 'bg-white py-1  px-2 rounded-md  text-secundary font-bold'
                : 'bg-transparent text-textLigth')
            }
            onClick={() => onhandleClik('sell')}
          >
            <RiHomeLine size={'22px'} />

            <p>Vender</p>
          </span>
        </div>
        <div className="w-1/3 relative max-lg:w-full">
          <PiMagnifyingGlassBold
            className="absolute text-secundary font-bold top-3 left-2 cursor-pointer"
            size={'30px'}
          />
          <input
            placeholder="Buscar..."
            className="p-4 rounded-md w-full bg-[#F2F1FC] pl-12 text-textLigth"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 grid-flow-row items-center justify-between w-3/4  mt-5 gap-14  max-sm:w-full max-xl:grid-cols-2 max-xl:w-[85%] overflow-auto   max-md:grid-flow-col   max-md:grid-rows-none max-md:grid-cols-none ">
        {housesArray
          .filter((item) => item.type === type)
          .slice(0, 9)
          .map((item, index) => {
            return (
              <CardSells
                key={index}
                type={item.type}
                cost={item.cost}
                direction={item.direction}
                image={item.image}
                information={item.information}
                name={item.name}
                popular={item.popular}
              />
            );
          })}
      </div>

      <a className="mx-auto p-3 mt-5 bg-dark text-white rounded-md font-semibold cursor-pointer hover:bg-secundaryDark">
        Explorar más propiedades
      </a>
    </div>
  );
};

export default Sells;
