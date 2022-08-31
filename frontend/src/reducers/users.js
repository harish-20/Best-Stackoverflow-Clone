const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      if (action.payload) return [...action.payload]
      else return null

    case 'UPDATE_CURRENT_USER':
      const newList = state.map((ele) =>
        ele._id === action.payload.id ? action.payload : ele,
      )
      return [...newList]
    default:
      return state
  }
}

export default UsersReducer
