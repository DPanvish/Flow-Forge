import React from 'react'
import Navbar from './components/layout/Navbar.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-primary text-text-primary">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-secondary p-6 rounded-lg shadow-md border border-border">
          <h2 className="text-2xl font-semibold mb-4">Welcome to your Project</h2>
          <p className="text-text-secondary mb-6">
            Your new Navbar is above. This main content area is where your
            pages (like the Problems Page or Dashboard) will be displayed.
          </p>
          <button className="bg-accent-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-accent-hover transition-colors cursor-pointer">
            Get Started
          </button>
          <button className="ml-4 bg-transparent border-2 border-accent-secondary text-accent-secondary font-bold py-2 px-6 rounded-lg hover:bg-accent-secondary hover:text-white transition-all cursor-pointer">
            Learn More
          </button>
        </div>

      </main>

    </div>
  )
}

export default App
