
import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router";
import { useLogout } from '../hooks/useLogout';
import styled from 'styled-components';
import nlogo from '../assets/nlogo.png'

// styling

const ResponsiveMenu = styled.nav`
.nav-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #fff;
  position: relative;
  z-index: 2;
}

.nav-header {
  display: flex;
  align-items: center;
}

.logo {
  height: 4rem;
  margin-right: 2rem;
}

.nav-toggle {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: #000;
  cursor: pointer;
  transition: all 0.3s linear;
}

.nav-toggle:hover {
  transform: rotate(90deg);
}

.links-container {
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: calc(90vh - 4rem);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.links-container.show {
  height: calc(90vh - 4rem);
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.links li {
  opacity: 0;
}

.links li a {
  display: block;
  font-size: 1.5rem;
  text-transform: capitalize;
  color: #000;
  transition: all 0.3s linear;
  padding: 1rem;
}

.links li a:hover {
  color: #ff725e;
}

.show-links .links li {
  opacity: 1;
  transition: all 0.3s ease-in-out 0.5s;
}

const linkStyles = {
  height: showLinks ? '100%' : '0',
  transition: 'height 0.3s ease-in-out',
  overflow: 'hidden'
};

@media screen and (min-width: 768px) {
  .links-container {
    height: auto !important;
    display: flex !important;
    justify-content: center;
  }
  .links {
    display: flex;
    justify-content: center;
  }
  .link {
    margin: 0 1rem;
  }
  .link > a {
    text-transform: capitalize;
    color: #fff;
    font-weight: bold;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    transition: var(--transition);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    &:hover {
      color: var(--clr-primary-1);
      background: var(--clr-primary-8);
    }
  }
  .logo {
    margin-left: 0;
  }
}


`

const NavContainer = styled.nav`
  background-color: #073b4c;
  padding: 0.5rem;
  color: #ef476f;
`;

const NavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  .nav-header {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 40px;
    margin-right: 1rem;
    padding: 0;
  }

  .nav-toggle {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: auto;
    display: none;

    svg {
      font-size: 1.5rem;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin-right: 1rem;

      a {
        text-decoration: none;
        color: #333;
        font-size: 1.2rem;

        &:hover {
          color: #0099ff;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .nav-toggle {
      display: block;
    }

    .links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: #f5f5f5;
      padding: 1rem;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    }

    .links.show-links {
      display: flex;
    }

    .links li {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    .nav-toggle {
      margin-right: 1rem;
    }
  }
`




export default function Header() {
    
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

    const { logout} = useLogout();
    const location = useLocation();
    const pathName = location.pathname;
    const navigate = useNavigate();
    console.log(pathName);
    // function pathMathRoute(route){
    //   if(route === pathName){
    //     return true;
    //   }
    // }


    return (
      <NavContainer>
        <NavCenter>
          <div className="nav-header">
            <Link to="/">
              <img src={nlogo} alt="nimbuscart logo" className="logo" />
            </Link>
            <button type="button" className="nav-toggle" onClick={toggleLinks}>
              {showLinks ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <ul className={showLinks ? 'links show-links' : 'links'}>
            <li onClick={() => navigate('/login')}>
              login
            </li>
            <li onClick={() => navigate('/signup')}>
              Signup
            </li>
            <li onClick={logout}>
              Lougout
            </li>
          </ul>
        </NavCenter>
      </NavContainer>
    );
}

 

