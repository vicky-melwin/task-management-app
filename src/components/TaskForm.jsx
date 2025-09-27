import { useNavigate } from "react-router-dom";

export default function TaskForm({ form, onSubmit }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.validate()) {
      onSubmit(form.values); // ✅ will call addTask
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
      <div>
        <label className="block font-medium">Title</label>
        <input
          name="title"
          value={form.values.title}
          onChange={form.handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        {form.errors.title && (
          <p className="text-red-500 text-sm">{form.errors.title}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium">Description</label>
        <textarea
          name="description"
          value={form.values.description}
          onChange={form.handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        {form.errors.description && (
          <p className="text-red-500 text-sm">{form.errors.description}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
