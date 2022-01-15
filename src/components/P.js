import React from 'react'

const P = ({ children }) => {
  return (
    <p className="py-2">
      <span className="indent"></span>
      {children}
    </p>
  )
}

export default P
