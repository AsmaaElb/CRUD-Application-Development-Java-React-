import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addTask, getTask, updateTask } from '../services/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function TaskForm() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (id) {
      getTask(id).then((res) => {
        setTitle(res.data.title)
        setCompleted(res.data.completed)
      }).catch(() => {
        toast.error("Error loading task")
      })
    }
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const task = { title, completed }

    try {
      if (id) {
        await updateTask(id, task)
        toast.success("Task updated successfully")
      } else {
        await addTask(task)
        toast.success("Task added successfully")
      }

      setTimeout(() => navigate("/"), 1500)
    } catch (err) {
      toast.error("Error while saving task")
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{id ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="completed"
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="h-4 w-4 text-blue-600"
          />
          <label htmlFor="completed" className="text-sm text-gray-700">Completed</label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          {id ? "Update Task" : "Add Task"}
        </button>
      </form>

      <ToastContainer position="bottom-right" />
    </div>
  )
}

export default TaskForm
