import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"




function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
