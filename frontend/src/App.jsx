import Home from "./component/Home.jsx"
import Create from './component/Create.jsx'
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
