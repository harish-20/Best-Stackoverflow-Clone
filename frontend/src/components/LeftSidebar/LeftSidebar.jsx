import { NavLink } from 'react-router-dom'
import globe from '../../assets/globe.png'

import './LeftSidebar.css'

const LeftSidebar = () => {
  const padLeft = {
    paddingLeft: '40px',
  }

  return (
    <div className="left-sidebar">
      <div className="side-nav">
        <NavLink to="/" className="side-nav-links" activeclassname="active">
          <p>home</p>
        </NavLink>

        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeclassname="active"
            style={padLeft}
          >
            <img
              src={globe}
              alt="globe"
              width="15px"
              style={{ marginLeft: '-25px', paddingRight: '10px' }}
            />
            <p>Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            activeclassname="active"
            style={padLeft}
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="side-nav-links"
            activeclassname="active"
            style={padLeft}
          >
            <p>Users</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
