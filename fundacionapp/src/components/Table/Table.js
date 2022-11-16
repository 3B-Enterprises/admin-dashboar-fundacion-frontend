import React from 'react'
import {Grid} from 'gridjs-react'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";

export const Table = ({data}) => {
  return (
    <div>
      <Grid
        data={data}
        columns={["Nombre", "Identificación", "Estado",'','']}
        search={true}
        style={{
          table: { "table-layout": "fixed",'margin-top':'20px' },
          td: { 'width': "200px", 'border': "1px solid #ccc" },
          th: { "text-align": "center", 'width': "80px" },
          container:{'margin-top':'20px'},
          header:{}
        }}
      />
    </div>
  );
}
