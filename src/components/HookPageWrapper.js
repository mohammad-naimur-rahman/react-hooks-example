import React, { useEffect } from 'react'
import GoHome from './GoHome'
import Heading from './Heading'

const HookPageWrapper = ({ hook, children }) => {
  useEffect(() => {
    document.title = `${hook} Hook`
  }, [hook])

  return (
    <div className="container">
      <Heading hook={hook} />
      <GoHome />
      {children}
    </div>
  )
}

export default HookPageWrapper
