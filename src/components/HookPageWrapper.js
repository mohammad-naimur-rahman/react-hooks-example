import React from 'react'
import GoHome from './GoHome'
import Heading from './Heading'

const HookPageWrapper = ({ hook, children }) => {
  return (
    <div className="container">
      <Heading hook={hook} />
      <GoHome />
      {children}
    </div>
  )
}

export default HookPageWrapper
