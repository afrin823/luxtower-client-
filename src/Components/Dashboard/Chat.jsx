import React, { useState } from 'react';
import { ChatList, MessageBox } from 'react-chat-elements';
import "react-chat-elements/dist/main.css";
import useAuth from '../../firebase/hook/useAuth/useAuth';
import useAxiosSecure from '../../firebase/hook/useAuth/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Chat = () => {
    // All users
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    });

   // Get the user from Firebase Auth

    const [messages, setMessages] = useState([
        {
            position: 'right',
            type: 'text',
            text: 'Hello! How can I help you today?',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            text: 'I need some assistance with my order.',
            date: new Date(),
        },
    ]);

    const [inputValue, setInputValue] = useState('');
    const [replyingTo, setReplyingTo] = useState(null); // Track the message being replied to

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const newMessage = {
                position: 'right',
                type: 'text',
                text: inputValue,
                date: new Date(),
                replyTo: replyingTo ? replyingTo.text : null, // Attach reply text
            };

            setMessages([...messages, newMessage]);
            setInputValue('');
            setReplyingTo(null); // Reset reply state after sending
        }
    };

    const handleReply = (message) => {
        setReplyingTo(message); // Set the message that is being replied to
    };

    // Generate dataSource for ChatList from users
    const chatListItems = users.map(user => ({
        avatar: user.photoURL || 'https://avatars.githubusercontent.com/u/80540635?v=4',
        alt: `${user.displayName}`,
        title: user.displayName || 'Anonymous',  // Display the user's name
        subtitle: "Let's catch up soon!",
        date: new Date(),
        unread: Math.floor(Math.random() * 10),  // Mock unread count
    }));

    return (
        <div className="flex h-screen bg-gray-200">
            {/* Sidebar - Chat List */}
            <div className="w-1/3 h-screen bg-white border-r">
                <ChatList
                    className="chat-list"
                    dataSource={chatListItems}  // Pass the array of user items here
                />
            </div>

            {/* Chat Window */}
            <div className="flex flex-col w-2/3 h-full bg-gray-100">
                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                        <div key={index} onClick={() => handleReply(message)}>
                            {/* Displaying the message with optional reply */}
                            <MessageBox
                                position={message.position}
                                type={message.type}
                                text={message.text}
                                date={message.date}
                                reply={message.replyTo ? { title: 'Reply', message: message.replyTo } : null}
                            />
                        </div>
                    ))}
                </div>

                {/* If replying, show which message is being replied to */}
                {replyingTo && (
                    <div className="p-2 bg-gray-200 text-sm text-gray-700">
                        Replying to: "{replyingTo.text}"
                    </div>
                )}

                {/* Input Box */}
                <div className="flex items-center p-4 bg-white border-t">
                    <input
                        type="text"
                        className="flex-grow border rounded-full px-4 py-2 mr-4 outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
