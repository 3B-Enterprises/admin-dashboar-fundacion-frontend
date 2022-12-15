import {CiLogout} from 'react-icons/ci'
import { GiHamburgerMenu } from "react-icons/gi";
import {GrClose} from 'react-icons/gr';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const[open,setOpen] = useState(false)
  const handleOpenClick = ()=>{
    setOpen(true)
    console.log(open)
  }
  const handleCloseClick =()=>{
    setOpen(false);
  }
  useEffect(()=>{
    console.log(open)
  },[])
  return (
    <>
      <div
        id="burger"
        className={
          open === false ? "md:hidden lg:hidden mx-3 my-2 block" : "hidden"
        }
        onClick={handleOpenClick}
      >
        <GiHamburgerMenu className="text-orange-600" />
      </div>
      <nav
        className={
          open === true
            ? `lg:flex lg:flex-col max-h-full bg-white w-[200px] h-screen lg:fixed fixed`
            : `lg:flex lg:flex-col max-h-full bg-white w-[200px] h-screen lg:fixed hidden`
        }
      >
        <div
          className="lg:hidden md:hidden justify-end flex flex-1"
          onClick={handleCloseClick}
        >
          <GrClose className="text-orange-600" />
        </div>
        <div className="flex-1">
          <Link to="/dash">
            <img
              src="https://cdn.discordapp.com/attachments/885708262211739669/1051861560756293782/WhatsApp_Image_2022-12-12_at_9.01.07_AM-removebg-preview.png"
              className="mx-auto min-w-[10px] min-h-[10px] mt-4 px-10 h-32"
            />
          </Link>
        </div>
        <div className="flex-col-reverse">
          <Link to="/">
            <CiLogout className="mx-auto min-w-[20px] min-h-[20px] mb-4" />
          </Link>
        </div>
      </nav>
    </>
  );
}
