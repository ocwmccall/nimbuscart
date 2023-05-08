import React from 'react'
import { useLocation, useNavigate } from "react-router";
import { useLogout } from '../hooks/useLogout';
import styled from 'styled-components';

const LinkStyled = styled.div`

`

function MenuLinks() {
    const navigate = useNavigate();
    const { logout } = useLogout();

  return (  
    <div>        
        <li className="" onClick={() =>{ navigate("/login")}}>Sign in</li>
        <li className="" onClick={() => { navigate("/signup")}}>Sign up</li>
        <li className="" onClick={() => { navigate("/signup")}}>Lists</li>
        <li onClick={logout} className="">Logout</li>        
    </div>    
  )
}

export default MenuLinks