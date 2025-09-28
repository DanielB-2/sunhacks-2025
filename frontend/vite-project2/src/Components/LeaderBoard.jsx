export function LeaderBoard() {
  
  const players = [
    { name: "Anirudh", points: 120 },
    { name: "Daniel", points: 110   },
    { name: "Daniel", points: 95 },
    { name: "Alice", points: 90 },
    { name: "Eve", points: 78  },
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
        <div className="grid grid-cols-2 bg-[#00a73d] text-white font-semibold py-3 px-6">
          <span>Username</span>
          <span className="text-right">Points</span>
        </div>

        
        <div className="divide-y divide-gray-200">
          {players.map((player, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 py-3 px-6 hover:bg-gray-50 transition"
            >
              <span className="font-medium">{player.name}</span>
              <span className="text-right">{player.points}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
