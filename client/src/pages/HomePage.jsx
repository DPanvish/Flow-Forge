import React from 'react'

const HomePage = () => {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-md border border-border">
      <h2 className="text-2xl font-semibold mb-4">Welcome to FlowForge!</h2>
      <p className="text-text-secondary mb-6">
        This is the home page. You can put your main landing page content here.
      </p>

      <button className="bg-accent-primary text-text-primary px-6 py-2 rounded-lg hover:bg-accent-hover transition-colors">
        Get Started
      </button>
    </div>
  )
}

export default HomePage
