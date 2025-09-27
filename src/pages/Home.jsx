import { Link } from "react-router-dom";
import TaskTable from "../components/TaskTable";

export default function Home({ tasks, setTasks }) {
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <Link
          to="/create"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          + Create Task
        </Link>
      </div>
      <TaskTable tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
