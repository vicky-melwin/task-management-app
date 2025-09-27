import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-red-600">404 - Page Not Found</h2>
      <Link to="/" className="text-blue-600 underline mt-4 block">
        Go Back Home
      </Link>
    </div>
  );
}
