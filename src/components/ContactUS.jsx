const ContactUS = () => {
  return (
    <div className="max-w-[100vw] min-h-[60vh] bg-[#ffffffcf] font-plusUltra flex flex-col items-center gap-3.5 justify-center ">
      <p className="font-semibold text-secundary text-xl">Promesa sin mensajes intrusivos</p>
      <p className="font-bold text-4xl text-textDark">¿Es usted propietario?</p>
      <p className="text-textDark opacity-60 text-[14px]">
        Descubra formas de aumentar el valor de su casa y cotizar en la lista. No es basura.
      </p>
      <div className="relative w-[40%] overflow-hidden">
        <input
          placeholder="Introduce tu dirección de correo"
          className="p-6 w-full text-textDark opacity-80 rounded-md"
        />
        <button className="bg-secundary px-4 py-2 absolute  rounded-md text-white left-[85%] top-4  ">
          Enviar
        </button>
      </div>
      <p className="text-textDark  text-xs">
        Únase a más de<span className="text-secundary font-semibold">10,000+ </span>
        propietarios más en nuestra comunidad inmobiliaria.
      </p>
    </div>
  );
};
export default ContactUS;
