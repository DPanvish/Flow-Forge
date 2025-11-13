import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


const LoginPage = () => {
  const {login} = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(`Failed to sign in: ${error.message}`);
    }
    setLoading(false);
  }


  return (
    <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center">
      <div className="mx-auto w-full max-w-md px-4">
        <div className="bg-secondary p-8 rounded-lg shadow-md border border-border">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary">
            Sign in to your account
          </h2>

          {error && (
            <div className="mt-4 rounded-md bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900 dark:text-red-300">
              {error}
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                disabled={loading}
                className="group relative flex w-full justify-center rounded-md border border-border bg-accent-primary py-2 px-4 text-sm font-semibold text-text-primary hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 cursor-pointer"
              >
                {loading ? "Signing in..." : "Sign in"}
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
