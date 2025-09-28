// src/components/MainPage.jsx
import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f9f4eb] px-4">
      {/* Hero Image */}
      <img
        className="max-w-3xl w-full h-auto object-contain rounded-2xl"
        src="LP.jpg"
        alt="RecycleX Preview"
      />


      {/* Call to Action */}
      <div className="mt-8 flex space-x-4">
        <Link
          to="/signup"
          className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Sign up for free
        </Link>

        <Link
          to="/scan"
          className="bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Start Scanning
        </Link>
      </div>
    </div>
  );
}
