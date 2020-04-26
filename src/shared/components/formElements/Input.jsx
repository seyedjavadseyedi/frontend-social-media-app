import React from 'react'

const Input = ({ element, id, type, placeholder, rows }) => {
  return (
    <div>
      {element === 'input' ? (
        <input id={id} type={type} placeholder={placeholder} />
      ) : (
        <textarea id={id} rows={rows || 3} />
      )}
    </div>
  )
}

export default Input
