import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ href, to, exact, type, onClick, children, disabled }) => {
  if (href) {
    return (
      <a href={href} className={`button`}>
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link to={to} exact={exact} className={`button`}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`button`} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
