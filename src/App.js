import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import UseCallback from "./hookExamplePages/useCallback"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/useCallback" element={<UseCallback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
