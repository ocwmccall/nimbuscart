import '../logo.jpg';
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useLogout } from '../hooks/useLogout';
import {HeaderCSS} from '../styles/header/header.css';
export default function Header() {
    
    const { logout} = useLogout();

    const location = useLocation();
    const pathName = location.pathname;
    const navigate = useNavigate();
    console.log(pathName);

    function pathMathRoute(route){
      if(route === pathName){
        return true;
      }
    }

    return (
      <div className="bg-[#96a0fa] border-b shadow-sm sticky top-0 z-40"> 
      <header className="flex justify-between items-center px-1 max-w-6xl mx-auto">
        <h1 className="headerStyling">
          NimbusCart
        </h1>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-lg font bold border-b-[3px] border-b-transparent 
              ${pathMathRoute("/signin") && "text-black border-b-red-500"}`}
              onClick={() =>{ navigate("/login")}}>Sign in</li>
            <li 
              className={`cursor-pointer py-3 text-lg font-bold border-b-[3px] border-b-transparent 
              ${pathMathRoute("/signup") && "text-black border-b-red-500"}`}
              onClick={() => { navigate("/signup")}}>Sign up</li>

            <li onClick={logout} className={`cursor-pointer py-3 text-lg font-bold border-b-[3px] border-b-transparent`}>Logout</li>
          </ul>
        </div>
      </header>
    </div>
    )
}

