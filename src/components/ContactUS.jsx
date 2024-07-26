const ContactUS = () => {
  return (
    <div className="max-w-[100vw] min-h-[60vh] bg-[#ffffffcf] font-plusUltra flex flex-col items-center gap-3.5 justify-center p-4 ">
      <p className="font-semibold text-secundary text-xl ">Promesa sin mensajes intrusivos</p>
      <p className="font-bold text-4xl text-textDark max-sm:text-3xl ">
        ¿Es usted propietario?
      </p>
      <p className="text-textDark opacity-60 text-[14px] max-sm:text-[12px]  max-sm:px-7">
        Descubra formas de aumentar el valor de su casa y cotizar en la lista. No es basura.
      </p>
      <div className="relative w-[40%] overflow-hidden hover:border  flex flex-col  max-xl:w-[60%]   max-lg:w-[80%] max-sm:gap-3 ">
        <input
          placeholder="Introduce tu dirección de correo"
          className="p-6 w-full text-textDark opacity-80 rounded-md "
        />
        <button className="bg-secundary px-5 py-2 absolute  rounded-md text-white left-[82%] top-4  max-sm:relative max-sm:left-0  max-sm:top-0 max-sm:w-full  ">
          Enviar
        </button>
      </div>
      <p className="text-textDark  text-xs max-sm:px-9">
        Únase a más de
        <span className="text-secundary font-semibold ">10,000+ </span>
        propietarios más en nuestra comunidad inmobiliaria.
      </p>
    </div>
  );
};
export default ContactUS;
