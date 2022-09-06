const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      if (action.payload) return [...action.payload]
      else return state

    case 'UPDATE_CURRENT_USER':
      const newList = state.map((ele) =>
        ele._id === action.payload.id ? action.payload : ele,
      )
      return [...state, ...newList]
    default:
      return state
  }
}

export default UsersReducer
