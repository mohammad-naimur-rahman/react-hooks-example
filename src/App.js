import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import UseCallback from './hookExamplePages/UseCallback'
import UseContext from './hookExamplePages/UseContext'
import UseDebugValue from './hookExamplePages/UseDebugValue'
import UseEffect from './hookExamplePages/UseEffect'
import UseImperativeHandle from './hookExamplePages/UseImperativeHandle'
import UseLayoutEffect from './hookExamplePages/UseLayoutEffect'
import UseMemo from './hookExamplePages/UseMemo'
import UseContextAndUseReducer from './hookExamplePages/UserContextAndUseReducer'
import UseReducer from './hookExamplePages/UseReducer'
import UseRef from './hookExamplePages/UseRef'
import UseState from './hookExamplePages/UseState'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useContext" element={<UseContext />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useContext-and-useReducer" element={<UseContextAndUseReducer />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useImperativeHandle" element={<UseImperativeHandle />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/useDebugValue" element={<UseDebugValue />} />
      </Routes>
    </Router>
  )
}

export default App
