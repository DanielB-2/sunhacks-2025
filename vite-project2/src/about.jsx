// src/components/About.jsx
import { TopBar } from "./TopBar";

export function About() {
  return (
    <div>
      <TopBar />

      
      <div className="flex flex-row h-80 flex-wrap">
        <div className="min-w-100 rounded-xl flex-1 text-center px-[5vw] flex items-center justify-center">
          <h1 className="text-4xl font-bold">What is Recyclix</h1>
        </div>
        <div className="min-w-100 rounded-xl flex-1 text-left px-[5vw] flex items-center">
          <p className="text-lg">
            Recyclix is a website that encourages users to recycle. By giving
            users points for recycling correctly they can compete against
            friends.
          </p>
        </div>
      </div>

      
      <div className="flex flex-row h-80 flex-wrap-reverse">
        <div className="min-w-100 rounded-xl flex-1 text-left px-[5vw] flex items-center">
          <p className="text-lg">
            Recyclix was made by <b>Anirudh Gali</b>, <b>Pratyush Grover</b>, and
            <b> Daniel Briggs</b> for SunHacks 2025 at ASU.
          </p>
        </div>
        <div className="min-w-100 rounded-xl flex-1 text-center px-[5vw] flex items-center justify-center">
          <h1 className="text-4xl font-bold">Who Made Recyclix</h1>
        </div>
      </div>
    </div>
  );
}
