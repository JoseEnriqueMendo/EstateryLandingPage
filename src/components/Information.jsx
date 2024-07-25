import { CardInformation } from './Cards';
import { RiYoutubeLine } from 'react-icons/ri';
import { BsHouseCheck } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';

const Information = () => {
  return (
    <div className="max-w-[100vw] min-h-[75vh] bg-dark font-plusUltra flex flex-col items-center gap-10 justify-around p-10">
      <div className="flex flex-row  w-full justify-around max-md:flex-col max-lg:gap-10 max-lg:flex-col max-lg:items-center">
        <p className="text-white text-4xl font-semibold w-[40%] max-lg:w-full ">
          Se lo ponemos fácil a <span className="text-secundary">inquilinos </span> y
          <span className="text-secundary"> propietarios.</span>
        </p>

        <p className="text-white text-[14px] opacity-60 w-[25%] max-lg:w-full ">
          Ya sea vender su casa actual, obtener financiamiento o comprar una casa nueva, lo
          hacemos fácil y eficiente. ¿La mejor parte? Ahorrará mucho dinero y tiempo con
          nuestros servicios.
        </p>
      </div>
      <div className="flex flex-row  w-full justify-around gap-5 overflow-x-auto py-2 max-w-[80vw] max-lg:flex-col">
        <CardInformation
          icon={
            <RiYoutubeLine size={'50px'} className="text-white rounded-full p-2 bg-dark" />
          }
          title="Visita virtual a casa"
          bgCard={'bg-[#ffffff3c]'}
          colorText={'text-white'}
          description="Puede comunicarse directamente con los propietarios y le brindamos un recorrido virtual antes de comprar o alquilar la propiedad."
        />
        <CardInformation
          icon={
            <BsHouseCheck size={'50px'} className="text-secundary rounded-full p-2 bg-ligth" />
          }
          title="Encuentra la mejor oferta"
          bgCard={'bg-white'}
          colorText={'text-textDark'}
          description="Explore miles de propiedades, guarde sus favoritas y configure alertas de búsqueda para no perderse la mejor oferta de vivienda."
        />
        <CardInformation
          icon={
            <IoDocumentTextOutline
              size={'50px'}
              className="text-secundary rounded-full p-2 bg-white"
            />
          }
          title="Prepárate para aplicar"
          bgCard={'bg-secundary'}
          colorText={'text-white'}
          description="¿Encontrar la casa de tus sueños? ¡Solo necesita hacer un poco o ningún esfuerzo y podrá comenzar a mudarse a la nueva casa de sus sueños!"
        />
      </div>
      <div className="flex flex-row justify-around w-1/2 h-fit max-xl:w-full max-md:gap-5">
        <span className="flex flex-col items-center gap-1">
          <p className="text-white font-bold text-4xl  max-md:text-2xl">7.4%</p>
          <p className="text-white opacity-40 text-xs">Tasa de retorno de la propiedad</p>
        </span>

        <span className="w-1 bg-white h-10 gap-1"></span>
        <span className="flex flex-col items-center">
          <p className="text-white font-bold text-4xl max-md:text-2xl">3,856</p>
          <p className="text-white opacity-40 text-xs">Propiedad en Venta y Alquiler</p>
        </span>
        <span className="w-1 bg-white h-10 gap-1"></span>
        <span className="flex flex-col items-center">
          <p className="text-white font-bold text-4xl max-md:text-2xl">2,540</p>
          <p className="text-white opacity-40 text-xs">Transacciones diarias completadas</p>
        </span>
      </div>
    </div>
  );
};

export default Information;
