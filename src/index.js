import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Comments from './pages/comments'
import Performance from './pages/Performance'
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind'
import Details from './pages/Details'

export const overmind = createOvermind(config, {
  devtools: false
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider value={overmind}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/performance' element={<Performance />} />
        <Route exact path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
