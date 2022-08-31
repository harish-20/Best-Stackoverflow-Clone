const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_USER':
      if (action.payload) return { ...state, ...action.payload }
      else return null

    default:
      return state
  }
}

export default currentUserReducer
