import React from 'react'
import './Message.css'

function Message (props) {
  return (
    <div className='Message'>
      <h1 className='Text'>{props.comment.name}</h1>
      <h1 className='Text'>{props.comment.email}</h1>
      <h1 className='Text'>{props.comment.body}</h1>
    </div>
  )
}

export default Message
