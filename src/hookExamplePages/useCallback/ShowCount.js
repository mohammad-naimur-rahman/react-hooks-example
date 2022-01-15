import { memo } from 'react'

const ShowCount = ({ matter, count }) => {
  console.log('Rendering show count', count)
  return (
    <p>
      {matter} is {count}
    </p>
  )
}

export default ShowCount
//export default memo(ShowCount)
