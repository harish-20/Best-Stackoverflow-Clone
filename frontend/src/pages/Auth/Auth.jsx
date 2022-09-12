import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'

import './Auth.css'
import { sendOtp, verifyOtp } from '../../api'
const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // user information
  const [isSignup, setIsSignUp] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  // authentication information
  const [otp, setOtp] = useState('')
  const [isPhoneNumberEntered, setIsPhoneNumberEntered] = useState(false)
  const [phoneVerified, setPhoneVerified] = useState(false)

  const linkStyle = {
    color: '#007ac6',
  }

  const submitOtp = async () => {
    const trimedNumber = phoneNumber.split(' ').join('')
    const { data: isVerified } = await verifyOtp(trimedNumber, otp)

    if (isVerified === true) {
      alert('phone number verified')
      setPhoneVerified(true)
    } else {
      alert('invalid otp please check it')
    }
  }

  const getOtp = async () => {
    const trimedNumber = phoneNumber.split(' ').join('')
    setIsPhoneNumberEntered(true)
    await sendOtp(trimedNumber)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(email && password)) {
      alert('Enter email and password')
    }

    if (isSignup) {
      if (phoneVerified) {
        const trimedNumber = phoneNumber.split(' ').join('')
        dispatch(
          signup(
            { name, email, password, phoneNumber: trimedNumber },
            navigate,
          ),
        )
      } else {
        alert('verify your phone number to signup')
      }
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
      <div
        className="auth-container-2"
        style={isSignup ? { paddingTop: '40px' } : {}}
      >
        {!isSignup && (
          <img className="auth-icon" src={icon} alt="stackoverflow" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
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
              <label htmlFor="phonenumber">
                <h4>Phone number</h4>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>
              <span className="auth-btn" onClick={getOtp}>
                send otp
              </span>
              {isPhoneNumberEntered && (
                <>
                  <div htmlFor="phonenumber">
                    <h4>OTP</h4>
                    <input
                      className="input-element"
                      type="text"
                      name="otp"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <span
                    className="auth-btn"
                    onClick={phoneVerified ? {} : submitOtp}
                    style={
                      phoneVerified
                        ? { background: 'green', border: 'none' }
                        : {}
                    }
                  >
                    {phoneVerified ? 'verified' : 'verify'}
                  </span>
                </>
              )}
            </>
          )}
          <div htmlFor="email">
            <h4>Email</h4>
            <input
              className="input-element"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

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
          {isSignup ? (
            <button className="auth-btn" type="submit">
              sign in
            </button>
          ) : (
            <button className="auth-btn" type="submit">
              log in
            </button>
          )}
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
