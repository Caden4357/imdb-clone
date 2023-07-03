import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MovieProvider } from './context/MovieProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { TvShowProvider } from './context/TvShowProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TvShowProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </TvShowProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
