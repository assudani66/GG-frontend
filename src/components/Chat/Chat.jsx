import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

// Create a socket instance outside of the component so it doesn't reconnect every time
const socket = io('http://localhost:3000');

const Chat = () => {
  const [chats, setChats] = useState([]); // Chat array to store messages
  const [input, setInput] = useState(''); // Chat input

  // Initialize the socket connection and listen for incoming messages
  useEffect(() => {
    // Listen for 'chatMessage' events from the server
    socket.on('chatMessage', (data) => {
        console.log(data);
      setChats((prevChats) => [{ name: data.user, text: data.msg }, ...prevChats]);
    });

    // Cleanup the socket listener on component unmount
    return () => {
      socket.off('chatMessage');
    };
  }, []);

  const addChat = () => {
    if (input.trim() === '') return;

    // Emit the message to the server
    socket.emit('chatMessage', input, 'room1'); // Emit to the room

    // Optionally: Add the message to the local state to show it immediately (before server response)
    setChats([{ name: 'You', text: input }, ...chats]);
    setInput(''); // Clear the input after submission
  };

  return (
    <div className="border-2 border-primary rounded-md bg-secondary p-4 px-3 shadow-custom-drop text-left relative flex flex-col">
      <h1 className="font-medium sticky top-0">Room chat</h1>
      <ul className="flex flex-col-reverse gap-y-4 my-4 h-1 grow overflow-y-scroll">
        {chats.map((chat, index) => (
          <li key={index} className="flex flex-col">
            <p className="font-bold text-[9.79px] leading-3">{chat.name}</p>
            <span className="text-sm">{chat.text}</span>
          </li>
        ))}
      </ul>
      <section className="border-2 border-primary rounded-md flex p-1.5 pl-2.5 gap-x-1">
        <input
          className="bg-transparent grow outline-none"
          placeholder="Send a chat"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addChat()}
        />
        <aside className="border-2 border-primary rounded-md p-2" onClick={addChat}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33337 8L2.93071 4.37533C2.81537 3.338 3.88337 2.576 4.82671 3.02333L12.7894 6.79533C13.806 7.27666 13.806 8.72333 12.7894 9.20466L4.82671 12.9773C3.88337 13.424 2.81537 12.6627 2.93071 11.6253L3.33337 8ZM3.33337 8H8.00004"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </aside>
      </section>
    </div>
  );
};

export default Chat;
