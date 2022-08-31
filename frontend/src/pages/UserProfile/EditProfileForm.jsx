import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateProfile } from '../../actions/users'

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result.name)
  const [about, setAbout] = useState(currentUser?.result.about)
  const [tags, setTags] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = currentUser.result._id

    if (tags.length === 0) {
      dispatch(
        updateProfile(id, {
          name,
          about,
          tags: currentUser?.result?.tags,
        }),
      )
    } else {
      dispatch(updateProfile(id, { name, about, tags: tags.split(' ') }))
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
