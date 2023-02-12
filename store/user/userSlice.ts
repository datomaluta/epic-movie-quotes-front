import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  name: '',
  emails: [{ id: '', email: '', is_primary: '', email_verified_at: '' }],
  has_verified_email: '',
  google_id: '',
  new_password: '',
  profile_image_file: '',
  profile_image_url: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.name = action.payload.userData.name
      state.id = action.payload.userData.id
      state.emails = action.payload.userData.emails
      state.has_verified_email = action.payload.userData.has_verified_email
      state.google_id = action.payload.userData.google_id
      state.profile_image_url = action.payload.userData.profile_image
    },
    uploadImage(state, action) {
      state.profile_image_file = action.payload.avatar
    },
    updateUserData(state, action) {
      if (action.payload.type === 'username') {
        state.name = action.payload.value
      }
      if (action.payload.type === 'password') {
        state.new_password = action.payload.value
      }
    },
    updatePassword(state, action) {
      if (action.payload.type === 'password') {
        state.new_password = action.payload.password
      }
    },
    updateAvatarImageAfterUpload(state) {
      state.profile_image_file = ''
    },
  },
})

export const userActions = userSlice.actions
export default userSlice
