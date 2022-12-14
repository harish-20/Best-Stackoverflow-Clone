import moment from 'moment'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Avatar from '../../components/Avatar/Avatar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import { fetchAllUsers, updateProfile } from '../../actions/users'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'

import '../Home/Home.css'
import './UserProfile.css'

const UserProfile = () => {
  const [Switch, setSwitch] = useState(false)

  const currentUser = useSelector((state) => state.currentUserReducer)
  const users = useSelector((state) => state.usersReducer)

  const dispatch = useDispatch()

  const { id } = useParams()
  const [currentProfile] = users.filter((user) => user._id === id)

  const updateUser = (id, name, about, location, tags) => {
    if (tags.length === 0) {
      dispatch(
        updateProfile(id, {
          name,
          about,
          location,
        }),
      )
    } else {
      dispatch(
        updateProfile(id, { name, about, location, tags: tags.split(' ') }),
      )
    }
    dispatch(fetchAllUsers())
  }
  return (
    <div
      className="home-container-1"
      style={{ marginTop: '20px', minHeight: '90vh' }}
    >
      <LeftSidebar />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                px="40px"
                py="30px"
                fontSize="50px"
              >
                {currentProfile?.name.toUpperCase()[0]}
              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} />
                  member for {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} />
                Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentProfile={currentProfile}
                setSwitch={setSwitch}
                updateUser={updateUser}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  )
}

export default UserProfile
