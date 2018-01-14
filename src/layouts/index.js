import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Wrapper from '../components/Wrapper/Wrapper'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'

import '../styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Zur goldenen Citröne"
      meta={[
        { name: 'description', content: 'Zur golden Citröene - Berlin Foodtruck' },
        { name: 'keywords', content: 'Foodtruck, Oldtimer, Citröen, Berlin, Crepes, Food' }
      ]}
    />
    <Wrapper>
      <Header />

      <Main>{children()}</Main>
      <Footer />
    </Wrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
