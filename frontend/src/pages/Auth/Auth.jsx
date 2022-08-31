import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'

import './Auth.css'
const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isSignup, setIsSignUp] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const linkStyle = {
    color: '#007ac6',
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(email && password)) {
      alert('Enter email and password')
    }
    if (isSignup) {
      dispatch(signup({ name, email, password }, navigate))
    } else {
      dispatch(login({ email, password }, navigate))
    }
  }

  const handleSwitch = () => {
    setIsSignUp(!isSignup)
  }
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img className="auth-icon" src={icon} alt="stackoverflow" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display name</h4>
              <input
                type="name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ fontSize: '13px', ...linkStyle }}>
                  forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isSignup && (
              <p style={{ color: '#666767', fontSize: '12px' }}>
                Passwords must contain at least eight
                <br /> characters, including at least 1 letter and 1<br />
                number.
              </p>
            )}
            {isSignup && (
              <label htmlFor="check">
                <input type="checkbox" id="check" />
                <p style={{ fontSize: '12px' }}>
                  Opt-in to receive occasional
                  <br /> product updates, user research invitations, company
                  <br />
                  announcements, and digests.
                </p>
              </label>
            )}
          </label>
          <button className="auth-btn" type="submit">
            {isSignup ? 'sign up' : 'log in'}{' '}
          </button>
        </form>
        {isSignup && (
          <p style={{ color: '#666767', fontSize: '12px' }}>
            By clicking “Sign up”, you agree to our{' '}
            <span style={linkStyle}>
              terms of
              <br /> service
            </span>
            , <span style={linkStyle}>privacy policy</span> and{' '}
            <span style={linkStyle}>cookie policy</span>
          </p>
        )}
        <p>
          {isSignup ? 'Already have an account' : "Don't have an account"}
          <button className="handle-switch-btn " onClick={handleSwitch}>
            {isSignup ? 'log in' : 'sign up'}
          </button>
        </p>
      </div>
    </section>
  )
}

export default Auth
