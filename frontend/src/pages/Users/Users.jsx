import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useLocation } from 'react-router-dom'
import UsersList from './UsersList'

import '../Home/Home.css'

const Users = () => {
  const location = useLocation()
  return (
    <div className="home-container-1" style={{ minHeight: '100vh' }}>
      <LeftSidebar />
      <div
        className="home-container-2"
        style={{ flexDirection: 'column', justifyContent: 'flex-start' }}
      >
        <h1 style={{ marginTop: '30px', fontWeight: '400' }}>Users</h1>
        <br />
        {location.pathname === '/Users' ? <UsersList /> : <></>}
      </div>
    </div>
  )
}

export default Users
