import { useParams } from "react-router-dom";
import useForm from "../hooks/useForm";
import TaskForm from "../components/TaskForm";

export default function EditTask({ tasks, setTasks }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));

  const form = useForm(task || { title: "", description: "" });

  const updateTask = (updated) => {
    setTasks(tasks.map((t) => (t.id === Number(id) ? { ...t, ...updated } : t)));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>
      <TaskForm form={form} onSubmit={updateTask} />
    </div>
  );
}
