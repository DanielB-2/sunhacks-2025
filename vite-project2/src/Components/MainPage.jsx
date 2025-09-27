export function MainPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f9f4eb]">
      <img 
        className="pt-30 max-w-4xl w-full h-auto object-contain rounded-lg shadow-md"
        src="LP.jpg" 
        alt="RecycleX Preview"
      />

      <div className="mt-6">
        <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
          Sign up for free
        </button>
      </div>
    </div>
  );
}
