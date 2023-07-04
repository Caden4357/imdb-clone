
import './App.css'
import LandingPage from './components/LandingPage'
import Nav from './components/nav/Nav'
import { Route, Routes } from 'react-router-dom'
import OneFilm from './components/OneFilm/OneFilm'
import OneSeries from './components/OneSeries/OneSeries'

function App() {

  return (
    <div className='bg-gray-100 dark:bg-slate-900'>
      <Nav/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/search' element={<LandingPage/>} />
        <Route path='/tvshows' element={<LandingPage/>} />
        <Route path='/theaters' element={<LandingPage/>} />
        <Route path='/topAllTime' element={<LandingPage/>} />
        <Route path='/movie/:id' element={<OneFilm/>} />
        <Route path='/tvshow/:id' element={<OneSeries/>} />
      </Routes>
    </div>
  )
}

export default App
