export function TopBar() {
  return (
    <div className="bg-[#85ad5c] shadow-xl h-[72px] flex justify-between items-center px-8 text-white">
      

      <div className="flex items-center space-x-2 font-semibold text-xl">
        <img className="h-10 w-10" src="Logo.jpg" alt="Logo" />
        <span>RecycleX</span>
      </div>

      
      <div className="flex space-x-8">
        <div className="cursor-pointer hover:underline">LeaderBoard</div>
        <div className="cursor-pointer hover:underline">SignUp</div>
        <div className="cursor-pointer hover:underline">About</div>
        
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>Scan</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-scan-line"
          >
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <path d="M7 12h10" />
          </svg>
        </div>
      </div>
    </div>
  );
}
