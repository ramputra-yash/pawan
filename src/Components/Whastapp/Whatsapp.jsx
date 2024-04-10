import React from 'react'
import './Whatsapp.css'
import chat_icon from '../../assets/chat.png'

function Whatsapp() {
  return (
    <div className='chat_icon'>
      <a href="https://wa.me/919013911695?text=Hello Sir! I want to join your tuition classes for my better future" target="_blank">
        <img src={chat_icon} alt="whatsapp" />
      </a>
    </div>
  )
}

export default Whatsapp
