import axios from 'axios'
import { useState } from 'react'

const EditProfileForm = ({ currentProfile, setSwitch, updateUser }) => {
  const [name, setName] = useState(currentProfile.name)
  const [about, setAbout] = useState(currentProfile.about)
  const [tags, setTags] = useState(currentProfile.tags.join(' '))
  const [location, setLocation] = useState(currentProfile.location)

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
    const id = currentProfile._id

    updateUser(id, name, about, location, tags)
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
