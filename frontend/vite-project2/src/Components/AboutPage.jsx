
import { useEffect, useState } from "react";

export function AboutPage() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch("http://localhost:5000/about");
        const data = await res.json(); 
        setContent(data.text || "About info not available.");
      } catch (err) {
        setContent("Error fetching About info.");
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f4eb] px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">About RecycleX</h1>
        {loading ? (
          <p className="text-gray-600 italic">Loading...</p>
        ) : (
          <p className="text-gray-700 text-lg">{content}</p>
        )}
      </div>
    </div>
  );
}