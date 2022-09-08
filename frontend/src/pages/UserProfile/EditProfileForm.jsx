import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateProfile } from '../../actions/users'

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result.name)
  const [about, setAbout] = useState(currentUser?.result.about)
  const [tags, setTags] = useState('')
  const [location, setLocation] = useState('')

  const dispatch = useDispatch()

  const getCity = async (latitude, longitude) => {
    const apiEndPoint = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude.toFixed(
      4,
    )}&lon=${longitude.toFixed(
      4,
    )}&limit=5&appid=44e0a0f6d8be0aef3ca2739a9e1cac17`
    axios
      .get(apiEndPoint)
      .then((res) => res.data)
      .then((data) => {
        setLocation(data[0].name + ',' + data[0].state)
      })
  }

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition((location) => {
      const coordinates = location.coords
      getCity(coordinates.latitude, coordinates.longitude)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = currentUser.result._id

    if (tags.length === 0) {
      dispatch(
        updateProfile(id, {
          name,
          about,
          location,
          tags: currentUser?.result?.tags,
        }),
      )
    } else {
      dispatch(
        updateProfile(id, { name, about, location, tags: tags.split(' ') }),
      )
    }
    setSwitch(false)
  }
  return (
    <div>
      <h1 className="edit-profile-title">Edit your profile</h1>
      <h1 className="edit-profile-title-2">Public information</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="edit-profile-form">
        <label htmlFor="name">
          <h3>Display name</h3>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About</h3>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="tags">
          <h3>Watched tags</h3>
          <p>add tags seperated by 1 space</p>
          <input
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="location">
          <h3>Location</h3>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <span className="user-getlocation-btn" onClick={getCoordinates}>
            getLocation
          </span>
        </label>
        <br />

        <input type="submit" value="Save profile" className="user-submit-btn" />

        <button
          type="button"
          className="user-cancel-btn"
          onClick={() => setSwitch(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default EditProfileForm
