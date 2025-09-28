import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <div className="bg-[#85ad5c] shadow-xl h-[72px] flex justify-between items-center px-8 text-white">
      <Link to="/" className="flex items-center space-x-2 cursor-pointer hover:underline font-semibold text-xl">
          <img className="h-10 w-10" src="Logo.jpg" alt="Logo" />
          <span>RecycleX</span>
        </Link>
     

      
      <div className="flex space-x-8">
        <div className="cursor-pointer hover:underline">LeaderBoard</div>
        <div className="cursor-pointer hover:underline">SignUp</div>

        
        <Link
          to="/about"
          className="cursor-pointer hover:underline"
        >
          About
        </Link>

        
        <Link
          to="/scan"
          className="flex items-center space-x-2 cursor-pointer hover:underline"
        >
          <span>Scan</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-scan-line-icon"
          >
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <path d="M7 12h10" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
