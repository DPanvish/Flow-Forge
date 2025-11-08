import React from 'react'
import Navbar from './components/layout/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProblemsPage from './pages/ProblemsPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProblemDetailPage from './pages/ProblemDetailPage.jsx'



const App = () => {
  return (
    <div className="min-h-screen bg-primary text-text-primary">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={<ProblemsPage />} />

          <Route path="/problems/:slug" element={<ProblemDetailPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
