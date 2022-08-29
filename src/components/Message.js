import React from 'react'
import './Message.css'

function Message (props) {
  return (
    <div className='Message'>
      <text className='Text'>{props.comment.name}</text>
      <text className='Text'>{props.comment.email}</text>
      <text className='Text'>{props.comment.body}</text>
    </div>
  )
}

export default Message
