import Avatar from '../Avatar/Avatar'
import decode from 'jwt-decode'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import { setCurrentUser } from '../../actions/currentUser'

import './Navbar.css'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.currentUserReducer)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    const token = user?.token
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])

  return (
    <nav className="main-nav">
      <div className="navbar">
        {/* main logo */}
        <Link className="nav-item nav-logo" to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        {/* links in nav bar */}
        <Link className="nav-item nav-btn" to="/">
          About
        </Link>
        <Link className="nav-item nav-btn" to="/">
          Products
        </Link>
        <Link className="nav-item nav-btn" to="/">
          For Teams
        </Link>

        {/* search inputfield */}
        <form>
          <input type="text" placeholder="search..."></input>
          <img
            className="search-icon"
            src={search}
            alt="search icon"
            width="18px"
          />
        </form>
        {!user ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              to={`/Users/${user.result?._id}`}
            >
              <Avatar
                color={'white'}
                backgroundColor="#009dff"
                px="12px"
                py="7px"
                borderRadius="50%"
              >
                {user?.result?.name.toUpperCase().charAt(0)}
              </Avatar>
            </Link>

            <button className="nav-item nav-links" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
