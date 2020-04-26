import React from 'react'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <MainHeader>
      <Link to='/'>
        <h2>پست های من</h2>
      </Link>
      <nav>
          <NavLinks />
      </nav>
    </MainHeader>
  )
}

export default MainNavigation
