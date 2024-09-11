/* eslint-disable react/prop-types */

const Question = ({pixel}) => {
    console.log(pixel + "px");
    const pixie = pixel + "px"
  return (
    <div className=" border-2 border-primary bg-secondary rounded-md flex flex-col">
        <h1 className="font-bold text-2xl my-3">How many pixels from right will align the asterisk to the Label?</h1>
        <section className="bg-white m-1.5 grow rounded-md text-4xl flex justify-start items-center px-4">
            <aside className="w-full relative">
                <span className={`text-primary absolute top-0 `} style={{right:pixie}}>*</span>
                <span className="text-black ml-[40%]">Label</span>
            </aside>

        </section>
    </div>
  )
}

export default Question