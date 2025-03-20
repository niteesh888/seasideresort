import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Room from './Components/Rooms/Room'
import Gallery from './Components/Gallery/Gallery'
import Comments from './Components/Comments/Comments'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './Components/Routes/MainPage'
function App() {

  return (
    <>
      <div>
        <Router>
       
        {/* <Banner /> */}
        {/* <MainPage/> */}
        <Header />
        
        {/* <Contact /> */}
        <Routes>
          <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/rooms' element={<Room />} />
        {/* <Route path='/Contact' element={<Contact />} /> */}
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/header' element={<Header />} />
        
        
        {/* <Banner /> */}
        {/* <About /> */}
        {/* <Room /> */}
        {/* <Gallery /> */}
        {/* <Foodmenu /> */}
        {/* <Chefs /> */}
        </Routes>
        
        {/* <Contact /> */}
        </Router>
        
      </div>
      
    </>
  )
}

export default App
