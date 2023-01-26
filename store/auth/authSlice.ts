import { createSlice } from '@reduxjs/toolkit'
import { SliceStateType } from './types'

const initialState: SliceStateType = {
  isRegistering: false,
  isLogining: false,
  showForgotPasswordModal: false,
  showConfirmEmailSentModal: false,
  showVerifiedEmailModal: false,
  showForgotPasswordEmailModal: false,
  showNewPasswordModal: false,
  showPasswordChangedModal: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showSignupModal(state) {
      state.isRegistering = true
    },
    hideSignupModal(state) {
      state.isRegistering = false
    },
    showLoginModal(state) {
      state.isLogining = true
    },
    hideLoginModal(state) {
      state.isLogining = false
    },
    setShowForgotPasswordModal(state) {
      state.isLogining = false
      state.showForgotPasswordModal = true
    },
    setHideForgotPasswordModal(state) {
      state.showForgotPasswordModal = false
    },
    setBackToLoginModal(state) {
      state.showForgotPasswordModal = false
      state.isLogining = true
    },
    setShowConfirmEmailSendModal(state) {
      state.showConfirmEmailSentModal = true
      state.isRegistering = false
    },
    hideConfirmEmailSentModal(state) {
      state.showConfirmEmailSentModal = false
    },
    setShowVerifiedEmailModal(state) {
      state.showVerifiedEmailModal = true
    },
    hideShowVerifiedEmailModal(state) {
      state.showVerifiedEmailModal = false
    },
    setShowForgotPasswordEmailModal(state) {
      state.showForgotPasswordEmailModal = true
    },
    hideShowForgotPasswordEmailModal(state) {
      state.showForgotPasswordEmailModal = false
    },
    setShowNewPasswordModal(state) {
      state.showNewPasswordModal = true
    },
    hideNewPasswordModal(state) {
      state.showNewPasswordModal = false
    },
    showPasswordChangedModal(state) {
      state.showPasswordChangedModal = true
    },
    hidePasswordChangedModal(state) {
      state.showPasswordChangedModal = false
    },
  },
})

export const authActions = authSlice.actions
export default authSlice
