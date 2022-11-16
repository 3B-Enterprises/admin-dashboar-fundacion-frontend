import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import {CiLogout} from 'react-icons/ci'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="flex flex-col max-h-full bg-orange-400 w-4/6 h-full ">
      <div className="flex-1">
        <Link to="/dash">
          <GrHomeRounded className="mx-auto min-w-[20px] min-h-[20px] mt-4" />
        </Link>
      </div>
      <div className="flex-col-reverse">
        <Link to="/">
          <CiLogout className="mx-auto min-w-[20px] min-h-[20px] mb-4" />
        </Link>
      </div>
    </nav>
  );
}
