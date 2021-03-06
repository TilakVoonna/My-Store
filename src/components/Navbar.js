import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';



class Navbar extends Component {
 render() {
  return(
    <Nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        
        <Link to='/'>
          <img src={logo} width='50px' height='50px' alt="store" className="navbar-brand" />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
        

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
             <i className='fas fa-cart-plus'/>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
    </Nav>
    )
   }
 }

 const Nav = styled.nav`
 background: var(--mainBlue);
 .nav-link {
   color: var(--mainWhite) !important;
   font-size:1.3rem;
   text-transform:capitalize;
 }
`;


export default Navbar;