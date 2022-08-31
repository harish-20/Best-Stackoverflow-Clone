import { Link } from 'react-router-dom'

const User = ({ user }) => {
  return (
    <Link to={`/Users/${user._id}`} className="user-profile-link">
      <h3>{user.name.toUpperCase()[0]}</h3>
      <h5>{user.name}</h5>
    </Link>
  )
}

export default User
