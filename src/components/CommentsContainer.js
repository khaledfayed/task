import React, { Profiler, useEffect } from 'react'
import Message from '../components/Message'
import { useAppState, useActions } from '../overmind'
import './commentsContainer.css'

function CommentsContainer () {
  const state = useAppState()
  const actions = useActions()

  const performance = (
    profilerId,
    mode,
    actualTime,
    baseTime,
    startTime,
    commitTime
  ) => {
    actions.performance.getPerformance({
      profilerId,
      mode,
      actualTime,
      baseTime,
      startTime,
      commitTime
    })
  }

  return (
    <div className='Main'>
      {state.comments.data.map(comment => (
        <Profiler
          key={comment.id}
          id={`comment#${comment.id}`}
          onRender={performance}
        >
          <Message key={comment.id} comment={comment} />
        </Profiler>
      ))}
    </div>
  )
}

export default CommentsContainer
