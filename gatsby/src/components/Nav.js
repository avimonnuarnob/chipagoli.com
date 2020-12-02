import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    margin-top: -6rem;

    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    align-items: center;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
    /* &[aria-current='page'] {
      color: var(--red);
    } */
  }
`;

const Nav = (props) => (
  <NavStyles>
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizzas">pizzas</Link>
      </li>
      <li>
        <Link to="/">
          <Logo />
        </Link>
      </li>
      <li>
        <Link to="/slicemasters">SliceMasters</Link>
      </li>
      <li>
        <Link to="/order">Order Ahead!</Link>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;