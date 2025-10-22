import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import Header from './components/Header/Header.jsx'
// import Footer from './components/Footer/Footer.jsx'

import Home from './pages/Home/Home.jsx'

import './App.scss'

export default function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
