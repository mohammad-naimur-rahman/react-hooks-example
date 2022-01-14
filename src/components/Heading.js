import { useLocation } from 'react-router-dom'

const Heading = ({ hook }) => {
  const { pathname } = useLocation()

  return (
    <h1 className="text-center py-5">
      {pathname === '/' ? 'All React' : hook}{' '}
      <span className="text-primary">{pathname === '/' ? 'Hooks' : 'Hook'}</span>
    </h1>
  )
}

export default Heading
