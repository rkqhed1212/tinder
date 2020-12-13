import React from 'react'
// import "./Chat.css"
import Chat from "./Chat"
export default function Chats() {
    return (
        <div className="chats">
            <Chat 
            name = "jessia"
            message= "whats up ~~"
            timestamp = "40 sec"
            profilePic= "https://i.pinimg.com/736x/8a/7e/40/8a7e409ed5d80522f2e6e0ce48b4289b.jpg"/>
            <Chat 
            name = "jenny"
            message= "what's up babe"
            timestamp = "40 sec"
            profilePic= "https://i.pinimg.com/originals/e5/55/83/e55583ef7c6259e3ec6e5da87fb45af2.jpg"/>
            <Chat 
            name = "jeesu"
            message= "I love you "
            timestamp = "40 sec"
            profilePic= "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/06/08/4b0bdfc6-a639-11ea-8ea0-d7434be00753_image_hires_121748.jpg?itok=44SyZaXz&v=1591589877"/>
            <Chat 
            name = "yuna"
            message= "heyyy"
            timestamp = "40 sec"
            profilePic= "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Im_Yoon-ah_on_July_22%2C_2017_%282%29.jpg/1200px-Im_Yoon-ah_on_July_22%2C_2017_%282%29.jpg"/>
        </div>
    )
}
