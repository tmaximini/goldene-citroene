import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  height: 30px;
  background-color: black;
  color: #fc00ff;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      display: inline;
      padding: 0 5px;
      font-family: 'Amatic SC', cursive;
      font-size: 1.1em;
      font-weight: bold;

      @media screen and (min-width: 375px) {
        font-size: 1.4em;
        padding: 0 10px 10px 10px;
      }
    }
  }
`

const NavBar = () => (
  <Nav>
    <ul>
      <li>Über uns</li>
      <li>Menu</li>
      <li>Wann / Wo</li>
      <li>Catering</li>
      <li>Kontakt</li>
    </ul>
  </Nav>
)

export default NavBar
