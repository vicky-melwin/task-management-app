import { Link } from "react-router-dom";
import { useState } from "react";

export default function TaskTable({ tasks, deleteTask }) {
  const [query, setQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filtered = tasks
    .filter((t) => t.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) =>
      sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const currentTasks = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="mt-6">
      {/* Search + Sort */}
      <div className="flex items-center gap-4 mb-4">
        <input
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-2 border rounded-md"
        />
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Sort {sortAsc ? "↓" : "↑"}
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-100">
              <td className="p-2 border">{task.title}</td>
              <td className="p-2 border">{task.description}</td>
              <td className="p-2 border space-x-2">
                <Link
                  to={`/edit/${task.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {currentTasks.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center p-4 text-gray-500">
                No tasks found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            disabled={page === i + 1}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded-md ${
              page === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
