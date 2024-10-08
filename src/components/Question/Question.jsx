/* eslint-disable react/prop-types */

const Question = ({pixel}) => {
    console.log(pixel + "px");
    const pixie = pixel + "px"
  return (
    <div className=" border-2 border-primary bg-secondary rounded-md flex flex-col">
        <h1 className="font-bold text-2xl my-3">How many pixels from right will align the asterisk to the Label?</h1>
        <main className="bg-white m-1.5 grow rounded-md text-4xl flex justify-start items-center px-4">
            <section className="w-full flex flex-col">
                <aside className="w-full relative">
                    <span className={`text-primary absolute top-0 `} style={{right:pixie}}>*</span>
                    <span className="text-black ml-[40%]">Label</span>
                </aside>
                <aside className="w-full relative">
                    <span className="text-black absolute">Outcome:</span>
                    <span className="text-black ml-[40%]">Label</span>
                    <span className="text-primary absolute ">*</span>
                </aside>
            </section>
        </main>
    </div>
  )
}

export default Question