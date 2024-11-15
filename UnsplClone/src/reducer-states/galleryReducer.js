export const initialState = { columns: 3 }

export const columnReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_COLUMNS':
      return {
        ...state,
        columns: state.columns === 3 ? 5 : 3
      }
    default:
      return state
  }
}
