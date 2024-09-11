const chats =[{name:"Samraath",text:"GG"},{name:"Gulam",text:"I almost missed it by 3px"},{name:"Badsha",text:"Bruh Samraath is him"}]

const Chat = () => {
  return (
    <div className="border-2 border-primary rounded-md p-4 px-3 shadow-custom-drop relative flex flex-col">
        <h1 className=" font-medium sticky top-0">Room chat</h1>
        <ul className="flex flex-col-reverse gap-y-4 mt-4 h-1 grow overflow-y-scroll">
        {chats.map((chat,index)=>(
            <li key={index} className="flex flex-col">
                <p className="font-bold text-[9.79px] leading-3">{chat.name}</p>
                <span className="text-sm">{chat.text}</span>
            </li>
        ))}
        </ul>
        <section className="border-2 border-primary rounded-md flex p-1.5 pl-2.5 gap-x-1">
            <input className="bg-transparent grow outline-none" placeholder="Send a chat" />
            <aside className="border-2 border-primary rounded-md p-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8L2.93071 4.37533C2.81537 3.338 3.88337 2.576 4.82671 3.02333L12.7894 6.79533C13.806 7.27666 13.806 8.72333 12.7894 9.20466L4.82671 12.9773C3.88337 13.424 2.81537 12.6627 2.93071 11.6253L3.33337 8ZM3.33337 8H8.00004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            </aside>
        </section>
    </div>
  )
}

export default Chat