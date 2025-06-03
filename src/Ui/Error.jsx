import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = "Something went wrong!";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    title = `Error ${error.status}`;
    message = error.statusText || "There was a problem with the request.";
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">{title}</h1>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
