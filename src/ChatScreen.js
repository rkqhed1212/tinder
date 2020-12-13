import React,{useState} from 'react'
import "./ChatScreen.css"
import Avatar from "@material-ui/core/Avatar"

export default function ChatScreen() {


    const [input, setInput] = useState('')
    const [messages, setMessage] = useState([

        {
            name:"jessia",
            image:"https://i.pinimg.com/736x/8a/7e/40/8a7e409ed5d80522f2e6e0ce48b4289b.jpg",
            message:"heyy"
        },{
            name:"jessia",
            image:"https://i.pinimg.com/736x/8a/7e/40/8a7e409ed5d80522f2e6e0ce48b4289b.jpg",
            message:"what's up babe"
        },{
            name:"jessia",
            image:"https://i.pinimg.com/736x/8a/7e/40/8a7e409ed5d80522f2e6e0ce48b4289b.jpg",
            message:"I love you"
        },
        {
            message:"thank you"
        }
    ])


    const handleSend = e => {
        e.preventDefault()

        setMessage([...messages, {message:input}])
        setInput("")
    }


    return (
        <div className="chatScreen"> 
            <h2>chat screen</h2>
            {messages.map(message =>(
                message.name ? (
                    <div className="chatScreen__message">
                <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}


                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder= 'Type a message..'
                    type="text"/>
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>

        </div>
    )
}
