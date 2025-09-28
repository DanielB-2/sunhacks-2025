import { ChatBox } from "./ChatBox";

export function ScanPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f9f4eb] px-4">
      
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-lg text-center border border-gray-200 mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Upload a file to scan
        </h1>
        <p className="text-gray-600 mb-6">Supported formats: JPG, PNG. Max size 5MB.</p>

        <label className="flex flex-col items-center px-6 py-10 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-green-600 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 0-4 4m4-4 4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          </svg>
          <span className="text-gray-700 font-medium">Click to upload</span>
          <input type="file" className="hidden" />
        </label>

        <button className="mt-6 bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
          Scan Now
        </button>
      </div>
      <div className="flex w-[100vw]">
        <button id="toggle-chat-bot" onClick={() => {
          let helpPopupClassList = document.getElementById('help-bot-popup').classList;
          if (helpPopupClassList.contains("hidden")) {
            helpPopupClassList.remove('hidden');
          }
          else {
            helpPopupClassList.add('hidden');
          }
          
          }} className="ml-[90vw] bg-orange-200 border- rounded-md">Need Help?</button>
      </div>
      
      <ChatBox className="hidden"/>
     
    </div>
    
  );
}
