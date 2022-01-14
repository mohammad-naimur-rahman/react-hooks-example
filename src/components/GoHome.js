import React from 'react'
import { Link } from 'react-router-dom'

const GoHome = () => {
  return (
    <Link to="/">
      <button className="btn btn-secondary mb-5">{String.fromCharCode(8592)} Go Home</button>
    </Link>
  )
}

export default GoHome
