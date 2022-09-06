const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>
            {currentProfile?.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </>
        ) : (
          <p>0 tag is watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
      {currentProfile?.location && (
        <div>
          <h4>Location</h4>
          <p>{currentProfile?.location}</p>
        </div>
      )}
    </div>
  )
}

export default ProfileBio
