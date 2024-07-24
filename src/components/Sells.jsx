import { useState } from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { TiKeyOutline } from 'react-icons/ti';
import { IoWalletOutline } from 'react-icons/io5';
import { RiHomeLine } from 'react-icons/ri';
import sell from '../constants/sell.json';
import { CardSells } from './Cards';

const Sells = () => {
  const [type, setType] = useState('rent');
  const HouseArray = sell;

  return (
    <div className="max-w-[100vw] min-h-[75vh] bg-[#ffffffcf] font-plusUltra flex flex-col items-center gap-3.5 p-10 ">
      <p className="font-bold text-3xl">Basado según tu ubicación</p>
      <p className="text-[14px] opacity-65">
        Algunas de nuestras propiedades seleccionadas cerca de su ubicación.
      </p>
      <div className="flex flex-row items-center justify-between w-3/4 mt-5">
        <div className="flex flex-row justify-around w-1/3 bg-[#F2F1FC] p-2 rounded-md items-center border-[#cdc9efc7]  border">
          <span
            className={
              'cursor-pointer flex flex-row gap-1 items-center ' +
              (type === 'rent'
                ? 'bg-white py-1  px-2 rounded-md  text-secundary font-bold'
                : 'bg-transparent text-textLigth')
            }
            onClick={() => setType('rent')}
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
            onClick={() => setType('buy')}
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
            onClick={() => setType('sell')}
          >
            <RiHomeLine size={'22px'} />

            <p>Vender</p>
          </span>
        </div>
        <div className="w-1/3 relative">
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
      <div className="grid grid-cols-3 grid-flow-row items-center justify-between w-3/4 mt-5 gap-10">
        <CardSells
          type={HouseArray.type}
          cost={HouseArray.cost}
          direction={HouseArray.direction}
          image={HouseArray.image}
          information={HouseArray.information}
          name={HouseArray.name}
          popular={HouseArray.popular}
        />
        <CardSells
          type={HouseArray.type}
          cost={HouseArray.cost}
          direction={HouseArray.direction}
          image={HouseArray.image}
          information={HouseArray.information}
          name={HouseArray.name}
          popular={HouseArray.popular}
        />
        <CardSells
          type={HouseArray.type}
          cost={HouseArray.cost}
          direction={HouseArray.direction}
          image={HouseArray.image}
          information={HouseArray.information}
          name={HouseArray.name}
          popular={HouseArray.popular}
        />
      </div>
    </div>
  );
};

export default Sells;
