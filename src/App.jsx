import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Branding from './pages/Branding/Branding.jsx'
import Home from './pages/Home/Home.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import ContactUs from './pages/Contact/ContactUs.jsx'

import './App.scss'
export default function App() {
  return (
    <div className="app">
      {/* <Header /> */}

      <main className="container">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Branding' element={<Branding />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<ContactUs />} />
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
