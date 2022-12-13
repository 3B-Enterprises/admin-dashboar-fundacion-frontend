import { Grid } from "gridjs-react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { h } from "gridjs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const Table = ({ data }) => {
  const navigate = useNavigate();
  const [modalOn,setModalOn] = useState(false);
  const [choice,setChoice] = useState(false);

  const warning = ()=>{
    setModalOn(true)
  }
  return (
    <div>
      <Grid
        data={data}
        columns={[
          "Nombre",
          "Identificación",
          "Estado",
          {
            name: "Detalle",
            formatter: (cell, row, data) => {
              return h(
                "button",
                {
                  className:
                    "py-2 px-4 px-auto border rounded-md text-white bg-orange-400",
                  onClick: () => {
                    navigate(`/detail/${row.id}`);
                  },
                },
                "Detalle"
              );
            },
          },
          {
            name: "Editar",
            formatter: (cell, row) => {
              return h(
                "button",
                {
                  className:
                    "py-2 px-4 px-auto border rounded-md text-white bg-orange-400",
                  onClick: () => {
                    navigate(`/edit/${row.id}`);
                  },
                },
                "Editar"
              );
            },
          },
          {
            name: "Eliminar",
            formatter: (cell, row) => {
              return h(
                "button",
                {
                  className:
                    "py-2 px-4 px-auto border rounded-md text-white bg-red-600",
                  onClick: () => {
                    warning();
                  },
                },
                "Eliminar"
              );
            },
          },
        ]}
        search={true}
        style={{
          table: { "table-layout": "fixed", "margin-top": "20px",border : "1px solid #000" },
          td: { width: "180px", border: "1px solid #000" },
          th: { "text-align": "center", width: "80px" },
          container: { "margin-top": "20px" },
          header: {},
        }}
      />
      {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice}/>}
    </div>
  );
};
