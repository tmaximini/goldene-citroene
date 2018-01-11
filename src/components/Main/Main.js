import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  padding: 100px 0 0 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 62em;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 375px) {
    padding: 140px 0 0 0;
  }
`

export default Main
