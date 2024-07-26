import PropTypes from 'prop-types';
import { LiaBedSolid } from 'react-icons/lia';
import { PiBathtub } from 'react-icons/pi';
import { TbMeterSquare } from 'react-icons/tb';
import { GiStarsStack } from 'react-icons/gi';

export const CardInformation = ({ icon, title, bgCard, colorText, description }) => {
  return (
    <div
      className={
        'hover:mb-1 min-w-[25vw] min-h-[160px] rounded-md flex flex-row gap-8 py-4 px-5 font-plusUltra ' +
        bgCard
      }
    >
      <div className={'rounded-full mt-5 w-fit h-fit'}>{icon}</div>
      <div className="flex flex-col gap-2 justify-center">
        <p className={'font-semibold text-xl ' + colorText}>{title}</p>
        <p className={'text-xs opacity-60 ' + colorText}>{description}</p>
      </div>
    </div>
  );
};

CardInformation.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  bgCard: PropTypes.node.isRequired,
  colorText: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export const CardSells = ({ popular, name, image, type, information, cost, direction }) => {
  return (
    <div
      className={
        'min-w-[20vw] max-md:min-w-[40vw]  max-sm:min-w-[80vw]  cursor-pointer hover:bg-[#e9e8f7] pb-2 min-h-[160px] rounded-md flex flex-col gap-1  font-plusUltra bg-white relative'
      }
    >
      <img src={image} className="rounded-t-md  max-h-48 h-48" alt={type} />

      <div className="py-2 px-4 flex flex-col gap-1">
        <div
          className={
            ' absolute flex flex-row items-center  gap-1 rounded-md bg-secundary  px-3 py-1 top-[50%] ' +
            (popular ? 'visible' : 'invisible')
          }
        >
          <GiStarsStack className="text-white " />
          <p className="text-white font-semibold">POPULAR</p>
        </div>

        <p>
          <span className="text-secundary font-bold text-xl"> {`$${cost}`}</span>
          <span className="opacity-60 font-semibold text-[14px]">/mes</span>
        </p>
        <p className="font-bold text-textDark text-xl">{name}</p>
        <p className="opacity-60 text-[14px] truncate">{direction}</p>
        <div className="flex flex-row justify-between border-t-[1px] pt-2 max-lg:text-[13px]">
          <span className="flex flex-row gap-1 items-center">
            <LiaBedSolid className="text-secundary" />
            <p className="opacity-75">{`${information.beds} camas`}</p>
          </span>
          <span className="flex flex-row gap-1 items-center">
            <PiBathtub className="text-secundary " />
            <p className="opacity-75">{`${information.bathroom} baños`}</p>
          </span>
          <span className="flex flex-row gap-1 items-center">
            <TbMeterSquare className="text-secundary" />

            <p className="opacity-75">
              {`${information.m2}m`}
              <sup>2</sup>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

CardSells.propTypes = {
  popular: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  information: PropTypes.shape({
    beds: PropTypes.number.isRequired,
    bathroom: PropTypes.number.isRequired,
    m2: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
