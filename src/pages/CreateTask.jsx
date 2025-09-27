import useForm from "../hooks/useForm";
import TaskForm from "../components/TaskForm";

export default function CreateTask({ tasks, setTasks }) {
  const form = useForm({ title: "", description: "" });

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create Task</h2>
      <TaskForm form={form} onSubmit={addTask} />
    </div>
  );
}
