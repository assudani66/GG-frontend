/* eslint-disable react/prop-types */

import { useState } from "react"

const Submit = ({setPixel}) => {
    const [input,setInput] = useState("");

    const clickHandler = () => setPixel(input);
    console.log(input);

  return (
    <div className="font-bold text-4xl border-2 border-primary rounded-md bg-light p-3 pl-6 w-fit self-center flex gap-x-2 mt-10">
        <input value={input} onChange={(e)=>setInput(e.target.value)} className="bg-transparent outline-none bg-red-300 w-20" placeholder="0" onKeyDown={(e) => e.key === 'Enter' && clickHandler()} />
        <button className="border-2 border-primary text-sm font-bold rounded-md bg-black p-3 px-6 text-primary text-center hover:text-black hover:bg-primary hover:shadow-button-drop hover:shadow-primary transition-colors ease-linear"
        onClick={clickHandler}
        >SUBMIT</button>
    </div>
  )
}

export default Submit