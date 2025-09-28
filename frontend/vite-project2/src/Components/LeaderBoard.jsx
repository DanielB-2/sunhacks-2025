export function LeaderBoard() {
  const players = [
    { name: "Anirudh", points: 120 },
    { name: "Daniel", points: 110 },
    { name: "Pratyush", points: 95 },
    { name: "Alice", points: 90 },
    { name: "Eve", points: 78 },
    { name: "Bob", points: 69 },
    { name: "Charlie", points: 67 },
    { name: "Sophia", points: 61 },
    { name: "Max", points: 55 },
    { name: "Olivia", points: 51 },
  ];

  return (
    <div className="min-h-screen bg-[#f9f4eb] p-6 flex flex-col items-center">
      
      <div className="bg-white shadow-xl px-10 py-4 font-bold text-3xl rounded-full mb-8 text-center">
        LEADERBOARD
      </div>

     
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-3xl overflow-hidden">
        
        <div className="grid grid-cols-3 bg-[#00a73d] text-white font-semibold py-3 px-6">
          <span>Position</span>
          <span>Username</span>
          <span className="text-right">Points</span>
        </div>

        
        <div className="divide-y divide-gray-200">
          {players.map((player, idx) => {
            let medalColor = "";
            if (idx === 0) medalColor = "text-yellow-500"
            else if (idx === 1) medalColor = "text-gray-400"
            else if (idx === 2) medalColor = "text-orange-600"

            return (
              <div
                key={idx}
                className="grid grid-cols-3 py-3 px-6 hover:bg-gray-50 transition items-center"
              >
                
                <div className = "flex items-center space-x-2">
                  <span className="font-medium">{idx + 1}</span>
                  <span>
                    
                  {idx < 3 ? (
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
                      className={`lucide lucide-medal ${medalColor}`}
                    >
                      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                      <path d="M11 12 5.12 2.2" />
                      <path d="m13 12 5.88-9.8" />
                      <path d="M8 7h8" />
                      <circle cx="12" cy="17" r="5" />
                      <path d="M12 18v-2h-.5" />
                    </svg>
                  ) : null}
                  </span>
                </div>

               
                <span className="font-medium">{player.name}</span>

                
                <span className="text-right">{player.points}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
