import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import NotFound from "./pages/NotFound";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(stored);
  }, []);

  // Save whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <Routes>
            <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
            <Route path="/create" element={<CreateTask tasks={tasks} setTasks={setTasks} />} />
            <Route path="/edit/:id" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
