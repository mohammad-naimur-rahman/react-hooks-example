import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Heading from './components/Heading'
import hooksData from './hooksDescriptionData.json'

const HomePage = () => {
  return (
    <div className="container">
      <Heading />
      <Accordion defaultActiveKey="0">
        {hooksData.map((hook) => (
          <Accordion.Item key={hook.id} eventKey={hook.id - 1}>
            <Accordion.Header>{hook.hookName} Hook</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex flex-column">
                <p>{hook.description}</p>
                <Link to={hook.link}>
                  <button className="btn btn-primary">See Example</button>
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
