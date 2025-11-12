import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext.jsx'
import { Link } from 'react-router-dom'

// Helper component for SVG icons
// We're putting this in the same file for simplicity.
// We can move these to their own files later.
function SunIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

const Navbar = () => {
  const {theme, toggleTheme} = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Problems",
      href: "/problems"
    },
    {
      name: "Dashboard",
      href: "/dashboard"
    },
    {
      name: "Discuss",
      href: "/discuss"
    }
  ];


  return (
    <nav className="bg-secondary border-b border-border px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Branding */}
          <div className="flex item-center">
            <Link to='/' className="shrink-0">
              <span className="text-2xl font-bold text-accent-primary">
                Flow Forge
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:bg-border hover:text-text-primary cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side items (Theme Toggle & Auth) */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                type="button"
                className="rounded-full bg-primary p-2 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-primary cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
              </button>

              {/* Auth Button */}
              <Link
                to="/signup"
                className="rounded-md bg-accent-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-secondary p-2 text-text-secondary hover:bg-border hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-secondary cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <XIcon /> : <BarsIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((items) => (
              <Link
                key={items.name}
                to={items.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-text-secondary hover:bg-border hover:text-text-primary"
              >
                {items.name}
              </Link>
            ))}
          </div>

          {/* Mobile Auth & Theme Toggle */}
          <div className="border-t border-border pb-3 pt-4">
            <div className="flex items-center justify-between px-4">
              <Link
                to="/signup"
                className="w-full text-center rounded-md bg-accent-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover"
              >
                Sign Up
              </Link>

              <button
                onClick={toggleTheme}
                type="button"
                className="ml-4 shrink-0 rounded-full bg-primary p-2 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
