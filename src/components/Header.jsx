import '../logo.jpg';
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useLogout } from '../hooks/useLogout';

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
      <div className="bg-white border-b shadow-sm sticky top-0 z-40"> 
      <header className="flex justify-between items-center px-1 max-w-6xl mx-auto">
        <div className="">
          NimbusCart
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathMathRoute("/signin") && "text-black border-b-red-500"}`}
              onClick={() =>{ navigate("/login")}}>Sign in</li>
            <li 
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathMathRoute("/signup") && "text-black border-b-red-500"}`}
              onClick={() => { navigate("/signup")}}>Sign up</li>

            <li onClick={logout} className={`cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent`}>Logout</li>
          </ul>
        </div>
      </header>
    </div>
    )
}

