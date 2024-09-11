
const participants =[{name:"Wadad",score:0},{name:"Piyush",score:0}]

const Leaderboard = () => {
  return (
    <div className="border-2 border-primary rounded-md p-4 shadow-custom-drop bg-secondary">
        <header className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Leaderboard</h1>
        <aside className="flex flex-col">
            <p className="text-sm"><span className=" text-2xl">1</span>/1</p>
            <small className=" text-[8px] -mt-1.5">Rounds</small>
        </aside>
        </header>
        <ul className="space-y-4 mt-4">
        {participants.map((participant,index)=>(
            <li key={index} className="flex justify-between">
                <p>{participant.name}</p>
                <span>{participant.score}</span>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Leaderboard