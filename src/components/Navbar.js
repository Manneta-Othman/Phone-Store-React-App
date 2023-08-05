import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { BiCart } from 'react-icons/bi';
import { ButtonContainer } from './button';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={logo} alt="Store" className='navbar-brand' style={{width: '35px'}}/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              products
            </Link>
          </li>
          <ul>
            <Link to='/cart' className='ml-auto'>
              <ButtonContainer>
                <span className='mr-2'>
                  <BiCart />
                </span>
                My Cart
              </ButtonContainer>
            </Link>
          </ul>
        </ul>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;