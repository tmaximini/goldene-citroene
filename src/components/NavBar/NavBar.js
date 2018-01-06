import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Nav = styled.nav`
  height: 30px;
  background-color: black;

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

      a {
        color: #fc00ff;
        text-decoration: none;
      }

      @media screen and (min-width: 375px) {
        font-size: 1.4em;
        padding: 0 10px 10px 10px;
      }
    }
  }
`

Link.defaultProps = {
  activeStyle: {
    textDecoration: 'underline'
  }
}

const NavBar = () => (
  <Nav>
    <ul>
      <li>
        <Link to="/" exact>
          Home
        </Link>
      </li>
      <li>
        <Link to="/menu" exact>
          Menu
        </Link>
      </li>
      <li>
        <Link to="/wann" exact>
          Wann / Wo
        </Link>
      </li>
      <li>
        <Link to="/catering" exact>
          Catering
        </Link>
      </li>
      <li>
        <Link to="/kontakt" exact>
          Kontakt
        </Link>
      </li>
    </ul>
  </Nav>
)

export default NavBar
