import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Branding from './pages/Branding/Branding-sections/Brandbook/Brandbook.jsx'
import Home from './pages/Home/Home.jsx'
// import About from './pages/About/About.jsx'
// import Contact from './pages/Contact/Contact.jsx'

import './App.scss'
export default function App() {
  return (
    <div className="app">
      {/* <Header /> */}

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/' element={<Branding/>} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/agents" element={<AgentsPage />} />
          <Route path="/workflow" element={<WorkflowPage />} />
          <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/checkyouneed" element={<CheckYouNeed />} />
          <Route path="/about" element={<About />} />
          <Route path="/siteandapps" element={<SiteAndApps />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
