import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <div className="bg-secondary p-6 rounded-lg shadow-md border border-border">
        <p className="text-text-secondary">
          This is where the logged-in user's profile and submissions will be.
        </p>
      </div>
    </div>
  )
}

export default Dashboard
