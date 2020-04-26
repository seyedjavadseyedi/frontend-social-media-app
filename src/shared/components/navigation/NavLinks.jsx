import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/'>همه کاربران</NavLink>
        </li>
        <li>
          <NavLink to='/u1/posts'>پست های من</NavLink>
        </li>
        <li>
          <NavLink to='/posts/new'>ایجاد پست</NavLink>
        </li>
        <li>
          <NavLink to='/auth'>احراز هویت</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks
