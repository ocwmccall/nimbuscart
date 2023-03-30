import '../logo.jpg'
import { useLocation, useNavigate } from "react-router";

export default function Header() {

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
      <header className="flex justify-between items-center px-3 mx-auto">
        <div className="">
          NimbusCart
        </div>
        <div>
          <ul className="flex space-x-10">
            <li 
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathMathRoute("/signin") && "text-black border-b-red-500"}`}
              onClick={() =>{ navigate("/signin")}}>Sign in</li>
            <li 
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
              ${pathMathRoute("/signup") && "text-black border-b-red-500"}`}
              onClick={() => { navigate("/signup")}}>Sign up</li>
          </ul>
        </div>
      </header>
    </div>
    )
}

