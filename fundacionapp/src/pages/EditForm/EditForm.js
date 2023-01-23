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
      setInfo([res.data]);
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
                value={info[0].name}
              />
              <label className="px-4 my-3 mx-auto font-bold">Apellido</label>
              <input
                type="text"
                name="surname"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].surname}
              />
              <label className="px-4 my-3 mx-auto font-bold">Sexo</label>
              <input
                type="text"
                name="sexo"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].sexo}
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Tipo de indentificación
              </label>
              <input
                type="text"
                name="indetificationType"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].identificationType}
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Identificación
              </label>
              <input
                type="text"
                name="identification"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].identification}
              />
              <label className="px-4 my-3 mx-auto font-bold">
                Nombre de la Madre
              </label>
              <input
                type="text"
                name="motherName"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].motherName}
              />
              <label className="px-4 my-3 mx-auto font-bold">Teléfono</label>
              <input
                type="text"
                name="phone1"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].phone1}
              />
              <label className="px-4 my-3 mx-auto font-bold">Dirreción</label>
              <input
                type="text"
                name="address"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].address}
              />
              <label className="px-4 my-3 mx-auto font-bold">Barrio</label>
              <input
                type="text"
                name="neighborhood"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].neighborhood}
              />
              <label className="px-4 my-3 mx-auto font-bold">Zona</label>
              <input
                type="text"
                name="zona"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].zona}
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
                  info[0].dateOfBirth
                ).getFullYear()}/${new Date(
                  info[0].dateOfBirth
                ).getMonth()}/${new Date(info[0].dateOfBirth).getDay()}`}
              />

              <button
                type="submit"
                className="border rounded-md text-white bg-orange-400 w-20 my-4 mx-auto"
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
                value={info[0].name}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Apellido</label>
              <input
                type="text"
                name="surname"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].surname}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Sexo</label>
              <input
                type="text"
                name="sexo"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].sexo}
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
                value={info[0].identificationType}
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
                value={info[0].identification}
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
                value={info[0].motherName}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Teléfono</label>
              <input
                type="text"
                name="phone1"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].phone1}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Dirreción</label>
              <input
                type="text"
                name="address"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].address}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Barrio</label>
              <input
                type="text"
                name="neighborhood"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].neighborhood}
                disabled
              />
              <label className="px-4 my-3 mx-auto font-bold">Zona</label>
              <input
                type="text"
                name="zona"
                className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
                onChange={handleState}
                value={info[0].zona}
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
                  info[0].dateOfBirth
                ).getFullYear()}/${new Date(
                  info[0].dateOfBirth
                ).getMonth()}/${new Date(info[0].dateOfBirth).getDay()}`}
                disabled
              />

              <button
                type="submit"
                className="border rounded-md text-white bg-orange-400 w-20 my-4 mx-auto"
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
