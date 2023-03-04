import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import ForgetPasswordPage from './components/ForgetPasswordPagejs'
import Homepage from './components/HomePage'
import Card from './components/Card'
import RegisterPage from './components/RegisterPage'
import AddMovie from './components/AddMovie'
import MovieForm from './components/MovieForm'
import WatchLater from './components/WatchLater'
import './App.css'
import UpdateMovie from './components/UpdateMovie'
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/update-movie" element={<UpdateMovie />} />
          <Route path="/movie-form" element={<MovieForm />} />
          <Route path="/watch-later" element={<WatchLater />} />
        </Routes>
      </div>
    </Router>
  )
}


