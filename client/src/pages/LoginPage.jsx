import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center">
      <div className="mx-auto w-full max-w-md px-4">
        <div className="bg-secondary p-8 rounded-lg shadow-md border border-border">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary">
            Sign in to your account
          </h2>

          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-border bg-primary px-3 py-2 text-text-primary placeholder-text-secondary focus:border-accent-primary focus:outline-none focus:ring-accent-primary sm:text-sm"
                  placeholder="Email address" 
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-border bg-primary px-3 py-2 text-text-primary placeholder-text-secondary focus:border-accent-primary focus:outline-none focus:ring-accent-primary sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="text-sm text-right">
              <a href="#" className="font-medium text-accent-primary hover:text-accent-hover cursor-pointer">
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-accent-primary py-2 px-4 text-sm font-semibold text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-text-secondary">
            Not a member?{" "}
            <Link to="/signup" className="font-medium text-accent-primary hover:text-accent-hover">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
