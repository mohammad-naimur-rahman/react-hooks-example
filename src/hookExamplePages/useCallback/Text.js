import { memo } from 'react'

const Text = ({ matter }) => {
  console.log('Rendered Text', matter)
  return <h5>Showing {matter}</h5>
}

export default Text
//export default memo(Text)
