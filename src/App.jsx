import { useState } from "react"
import Chat from "./components/Chat/Chat"
import Leaderboard from "./components/Leaderboard/Leaderboard"
import Question from "./components/Question/Question"
import Submit from "./components/Submit/Submit"

function App() {
  const [pixel,setPixel] = useState(0);

  return (
    <div className=" bg-custom-radial h-screen w-screen pt-[7%] text-center flex flex-col">
      <h1 className=" font-tourney font-medium text-6xl text-white text-center mb-10">PIXIREEEEE</h1>
      <section className="grid grid-cols-[1fr,2fr,1fr] mx-10 gap-x-6 h-96 ">
        <Leaderboard />
        <Question pixel={pixel} />
        <Chat />
      </section>
      <Submit setPixel={setPixel} />
    </div>
  )
}

export default App
