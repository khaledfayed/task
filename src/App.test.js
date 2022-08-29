import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
render(<BrowserRouter></BrowserRouter>, rootElement)
