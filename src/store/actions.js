import * as types from "./constants"
export const signup_post_api_v1_signup_create = data => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_CREATE,
  data
})

export const signup_post_api_v1_signup_createSucceeded = (
  response,
  starter
) => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})

export const signup_post_api_v1_signup_createFailed = (error, starter) => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_CREATE_FAILED,
  error,
  starter
})
