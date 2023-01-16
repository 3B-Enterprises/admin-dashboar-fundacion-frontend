import {useEffect,useState} from 'react'
import { CardInfo } from '../../components/CardInfo/CardInfo';
import { Navbar } from '../../components/Nav/Navbar'
import { Table } from '../../components/Table/Table';
import {getChildren} from '../../utils/requests'
import { Loading } from '../Loading/Loading';

export const Dashboard = () => {
  const [data,setData] = useState([])
  const [loader,setLoader] = useState(false);
  const getUsers = async()=>{
    setLoader(true)
    const resp = await getChildren();
    setData(resp.data)
    setLoader(false);
  }

  useEffect(()=>{
    getUsers()
  },[])

  if (loader) {
    return (
      <div className="flex">
        <div className="h-screen w-1/6 lg:w-[13%] md:w-[22%] inset-0 z-50">
          <Navbar />
        </div>
        <div className="flex-1">
          <div className="w-4/3">
            <CardInfo total={data.length} />
          </div>
          <div className="">
            <Loading/>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div className="flex">
        <div className="h-screen w-1/6 lg:w-[13%] md:w-[22%] inset-0 z-50">
          <Navbar />
        </div>
        <div className="flex-1">
          <div className="w-4/3">
            <CardInfo total={data.length} />
          </div>
          <div className="">
            <Table data={data} />
          </div>
        </div>
      </div>
    );
  }
  
}
