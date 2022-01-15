import { useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import Code from '../../components/Code'
import HookPageWrapper from '../../components/HookPageWrapper'
import Img from '../../components/Img'
import P from '../../components/P'
import ShowCount from './ShowCount'
import Text from './Text'
import HText from '../../components/HText'
import demo1 from './img/demo1.png'
import demo2 from './img/demo2.png'

const UseCallback = () => {
  const [salary, setsalary] = useState(1000)
  const [money, setmoney] = useState(500000)

  // const incSalary = useCallback(() => {
  //   setsalary(salary + 500)
  // }, [salary])

  const incSalary = () => {
    setsalary(salary + 500)
  }

  // const incMoney = useCallback(() => {
  //   setmoney(money + 100000)
  // }, [money])

  const incMoney = () => {
    setmoney(money + 100000)
  }

  return (
    <HookPageWrapper hook="useCallBack">
      <Text matter="Salary" />
      <ShowCount matter="Salary" count={salary} />
      <Button onClick={incSalary}>Increase Salary</Button>
      <hr />
      <Text matter="Money" />
      <ShowCount matter="Money" count={money} />
      <Button onClick={incMoney}>Increase Money</Button>
      <hr />
      <hr />
      <h2>Explanation</h2>
      <P>
        Let's assume we are using some reusable component.. Here, we reused <Code>Text</Code> and <Code>ShowCount</Code>
        . Now, when they will be used, they all will be rerendered for any of the component change. Let's see the
        browser console. At first, when the page loads, there are 4 renders (one for each component, we used console.log
        inside the component so that we can see the rendering).
      </P>
      <Img src={demo1} />
      <P>
        Now, uncomment the line <HText>export default Text</HText> and comment the memoized line in the{' '}
        <Code>Text</Code> component. Same for <Code>ShowCount</Code> component. And also uncomment. And also comment the
        functions that are using useCallback and uncomment the normal function in this file.
      </P>
      <P>
        Then click <Code>Increase Salary</Code> button and look at the console. The salary increases and you will notice
        4 renders. Though only one component should be rerendered
      </P>
      <Img src={demo2} />
    </HookPageWrapper>
  )
}

export default UseCallback
