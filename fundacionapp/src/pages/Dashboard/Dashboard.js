import {useEffect,useState} from 'react'
import { CardInfo } from '../../components/CardInfo/CardInfo';
import { Navbar } from '../../components/Nav/Navbar'
import { Table } from '../../components/Table/Table';


export const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='h-screen  w-1/6'>
        <Navbar />
      </div>
      <div className='flex-1'>
        <div className='mx-auto w-4/3'><CardInfo total={1}/></div>
        <div><Table data={[{nombre:'Andrés',identificación:'1010234440',estado:'Activo'}]}/></div>
      </div>
    </div>
  );
}
