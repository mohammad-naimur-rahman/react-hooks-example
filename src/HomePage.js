import { useEffect } from 'react'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Heading from './components/Heading'
import hooksData from './hooksDescriptionData.json'

const HomePage = () => {
  useEffect(() => {
    document.title = 'React Hooks'
  }, [])

  return (
    <div className="container">
      <Heading />
      <Accordion defaultActiveKey="1">
        {hooksData.map((hook) => (
          <Accordion.Item key={hook.id} eventKey={hook.id}>
            <Accordion.Header>{hook.hookName} Hook</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex flex-column">
                <p>{hook.description}</p>
                <Link to={hook.link}>
                  <button className="btn btn-primary">See Examples</button>
                </Link>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

export default HomePage
