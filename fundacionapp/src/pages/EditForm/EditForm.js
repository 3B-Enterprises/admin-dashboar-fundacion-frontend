import { useEffect, useState } from "react";
import { Navbar } from "../../components/Nav/Navbar";
import { Loading } from "../Loading/Loading";
import { getChild } from "../../utils/requests";
import { useParams,useLocation } from "react-router-dom";

export const EditForm = ({titulo,accion}) => {
  const [loader, setLoader] = useState(false);
  const [info,setInfo] = useState([])
  const params = useParams();
  const location = useLocation()

  const getInfo = async () => {
    setLoader(true);
    const res = await getChild(params.consecutive);
    if (res.statusCode === 200) {
      setInfo(res.data);
    }
    setLoader(false);
  };

  useEffect(() => {
    getInfo();
    console.log(location.pathname.substring(0,5))
  }, []);

  const handleState = () => {
    console.log('a')
  };

  const onSubmit= async () => {
    console.log('onsubmit')

  }

  if (loader === true) {
    return(<Loading/>)
  }else{
    if (location.pathname.substring(0,6) === '/edit/') {
      return (
        <div className="flex">
          <div className="h-screen  w-1/6">
            <Navbar />
          </div>
          <div className="flex-1">
            <form className="flex flex-col my-5 m-auto w-full max-w-[448px]">
              <div className="py-3 w-1/2 px-4">
                <span className="text-2xl font-semibold">{titulo}</span>
              </div>
              <label className="px-4 my-3 mx-auto font-bold">Nombre</label>
              <input
                type="text"
                name="name"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.name}
              />
              <label className="px-4 my-3 mx-auto font-bold">Apellido</label>
              <input
                type="text"
                name="surname"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.surname}
              />
              <label className="px-4 my-3 mx-auto font-bold">Sexo</label>
              <input
                type="text"
                name="sexo"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.sexo}
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Tipo de indentificación
              </label>
              <input
                type="text"
                name="indetificationType"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.identificationType}
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Identificación
              </label>
              <input
                type="text"
                name="identification"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.identification}
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Nombre de la Madre
              </label>
              <input
                type="text"
                name="motherName"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.motherName}
              />
              <label className="px-4 my-3 mx-auto font-bold">Teléfono</label>
              <input
                type="text"
                name="phone1"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.phone1}
              />
              <label className="px-4 my-3 mx-auto font-bold">Dirreción</label>
              <input
                type="text"
                name="address"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.address}
              />
              <label className="px-4 my-3 mx-auto font-bold">Barrio</label>
              <input
                type="text"
                name="neighborhood"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.neighborhood}
              />
              <label className="px-4 my-3 mx-auto font-bold">Zona</label>
              <input
                type="text"
                name="zona"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.zona}
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Fecha de Nacimiento
              </label>
              <input
                type="text"
                name="dateOfBirth"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={`${new Date(
                  info.dateOfBirth
                ).getFullYear()}/${new Date(
                  info.dateOfBirth
                ).getMonth()}/${new Date(info.dateOfBirth).getDay()}`}
              />

              <button
                type="submit"
                className="border rounded-md text-white bg-orange-400 w-20 my-4 mx-auto"
                onClick={() => onSubmit()}
              >
                {accion}
              </button>
            </form>
          </div>
        </div>
      );
    }else{
      if (location.pathname.substring(0,6) === "/deta") {
          return (
        <div className="flex">
          <div className="h-screen  w-1/6">
            <Navbar />
          </div>
          <div className="flex-1">
            <form className="flex flex-col my-5 m-auto w-full max-w-[448px]">
              <div className="py-3 w-1/2 px-4">
                <span className="text-2xl font-semibold">{titulo}</span>
              </div>
              <label className="px-4 my-3 mx-auto font-bold">Nombre</label>
              <input
                type="text"
                name="name"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.name}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Apellido</label>
              <input
                type="text"
                name="surname"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.surname}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Sexo</label>
              <input
                type="text"
                name="sexo"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.sexo}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Tipo de indentificación
              </label>
              <input
                type="text"
                name="indetificationType"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.identificationType}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Identificación
              </label>
              <input
                type="text"
                name="identification"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.identification}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Nombre de la Madre
              </label>
              <input
                type="text"
                name="motherName"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.motherName}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Teléfono</label>
              <input
                type="text"
                name="phone1"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.phone1}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Dirreción</label>
              <input
                type="text"
                name="address"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.address}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Barrio</label>
              <input
                type="text"
                name="neighborhood"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.neighborhood}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Zona</label>
              <input
                type="text"
                name="zona"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info.zona}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Fecha de Nacimiento
              </label>
              <input
                type="text"
                name="dateOfBirth"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={`${new Date(
                  info.dateOfBirth
                ).getFullYear()}/${new Date(
                  info.dateOfBirth
                ).getMonth()}/${new Date(info.dateOfBirth).getDay()}`}
                disabled
              />

              <button
                type="submit"
                className="border rounded-md text-white bg-orange-400 w-20 my-4 mx-auto"
                onClick={() => onSubmit()}
              >
                {accion}
              </button>
            </form>
          </div>
        </div>
        );
      }
    }
  }
};
