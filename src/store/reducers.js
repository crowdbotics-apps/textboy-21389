import * as types from "./constants"

const initialState = { signup: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_POST_API_V1_SIGNUP_CREATE:
    case types.SIGNUP_POST_API_V1_SIGNUP_CREATE_SUCCEEDED:
    case types.SIGNUP_POST_API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        signup: [...state.signup, action.response]
      })
    default:
      return state
  }
}
