import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import HomePage from './components/HomePage'
import Card from './components/Card'
import AddMovie from './components/AddMovie'
import MovieForm from './components/MovieForm'
import WatchLater from './components/WatchLater'
import './App.css'
import UpdateMovie from './components/UpdateMovie'
import Header from './components/Header'

// import EditMovie from './components/EditMovie'

export default function App() {
  return (

    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/update-movie" element={<UpdateMovie />} />
          <Route path="/movie-form" element={<MovieForm />} /> 
          <Route path="/watch-later" element={<WatchLater />} />
      
        
        </Routes>
        <>
        <Header />
        
        </>
      </div>
    </Router>

  )
}