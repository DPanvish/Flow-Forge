import React from 'react'
import { useTheme } from './contexts/ThemeContext.jsx'

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className="min-h-screen bg-primary text-text-primary p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-accent-primary">
          Flow Forge
        </h1>

        <button 
          onClick={toggleTheme}
          className="px-4 py-2 bg-secondary text-text-primary rounded-lg border border-border cursor-pointer"
        >
          Toggle to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </header>

      <main>
        <div className="bg-secondary p-6 rounded-lg shadow-md border border-border">
          <h2 className="text-2xl font-semibold mb-4">Welcome to your Project</h2>
          <p className="text-text-secondary mb-6">
            This card is using your new theme colors. The background is `bg-secondary`
            and this text is `text-text-secondary`.
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
