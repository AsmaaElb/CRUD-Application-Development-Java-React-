import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTasks, deleteTask } from '../services/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function TaskList() {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    try {
      const res = await getTasks()
      setTasks(res.data)
    } catch {
      toast.error("Failed to load tasks")
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteTask(id)
      toast.success("Task deleted successfully")
      fetchTasks()
    } catch {
      toast.error("Failed to delete task")
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Task List</h1>
        <Link
          to="/add"
          className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition duration-200"
        >
          + Add Task
        </Link>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks found.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow transition duration-200"
            >
              <div className="mb-3 sm:mb-0">
                <p className="text-lg font-medium text-gray-800">{task.title}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Status:{" "}
                  <span className={task.completed ? "text-green-600" : "text-red-600"}>
                    {task.completed ? "Completed" : "Not completed"}
                  </span>
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/edit/${task.id}`}
                  className="bg-yellow-400 text-white px-4 py-1.5 rounded-full font-medium shadow hover:bg-yellow-500 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-600 text-white px-4 py-1.5 rounded-full font-medium shadow hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <ToastContainer position="bottom-right" />
    </div>
  )
}

export default TaskList
