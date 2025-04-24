import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import About from '../components/pages/about/About'
import Contact from '../components/pages/contact/Contact'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default Router
