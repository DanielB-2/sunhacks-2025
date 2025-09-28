import { useState } from "react";
import { ChatBox } from "./ChatBox";

export function ScanPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setResult(""); // reset old result
  };

  const handleScan = async () => {
    if (!selectedFile) return alert("Please upload a file first.");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile); // <-- must be "file" to match Worker

    try {
      const res = await fetch(
        "https://recycle-x.agali9.workers.dev/classify-image",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setResult(data.result || "Could not classify item."); // <-- use result
    } catch (err) {
      console.error(err);
      setResult("Error: Could not reach backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f9f4eb] px-4">
      {/* Upload Card */}
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-lg text-center border border-gray-200 mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Upload a file to scan
        </h1>
        <p className="text-gray-600 mb-6">
          Supported formats: JPG, PNG. Max size 5MB.
        </p>

        {/* File Upload */}
        <label className="flex flex-col items-center px-6 py-10 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-green-600 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16v-8m0 0-4 4m4-4 4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
            />
          </svg>
          <span className="text-gray-700 font-medium">Click to upload</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Preview Image */}
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="Preview"
              className="w-48 mx-auto rounded-lg"
            />
          </div>
        )}

        {/* Scan Button */}
        <button
          onClick={handleScan}
          disabled={loading}
          className="mt-6 bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {loading ? "Scanning..." : "Scan Now"}
        </button>

        {/* Result */}
        {result && (
          <p className="mt-4 text-lg font-semibold text-gray-800">{result}</p>
        )}
      </div>
      

      {/* Floating Chat Toggle */}
      <button
        onClick={() => setShowChat((prev) => !prev)}
        className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        💬 Need Help?
      </button>

      {/* Chatbox */}
      {showChat && (
        <div className="fixed bottom-20 right-6 w-96">
          <ChatBox />
        </div>
      )}
    </div>
  );
}
