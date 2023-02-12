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
      const { name, id, emails, has_verified_email, google_id, profile_image } =
        action.payload.userData
      state.name = name
      state.id = id
      state.emails = emails
      state.has_verified_email = has_verified_email
      state.google_id = google_id
      state.profile_image_url = profile_image
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
