import { data } from 'autoprefixer';
import React from 'react'
import { CardInfo } from '../../components/CardInfo/CardInfo';
import { Navbar } from '../../components/Nav/Navbar'
import { Table } from '../../components/Table/Table';


export const Dashboard = () => {

  data = [
  { nombre: 'Andrés', identificación: '1010234440', estado: 'Activo' }, 
  { nombre: 'Pedro', identificación: '105678989', estado: 'Activo' }, 
  { nombre: 'Josué', identificación: '1234', estado: 'Activo' }, 
  { nombre: 'María', identificación: '12345678', estado: 'Activo' }, 
  { nombre: 'Franchesca', identificación: '123456789', estado: 'Activo' }, 
  { nombre: 'Saúl', identificación: '123456789', estado: 'Activo' }, 
  { nombre: 'Pablo', identificación: '121334535', estado: 'Activo' }]
  return (
    <div className='flex'>
      <div className='h-screen w-1/5'>
        <Navbar />
      </div>
      <div className='flex-1'>
        <div className='mx-auto w-4/3'><CardInfo total={data.length} /></div>
        <div><Table data={data} /></div>
      </div>
    </div>
  );
}
