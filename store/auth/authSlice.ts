import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from './type';

const initialState: SliceStateType = {
  isRegistering: false,
  isLogining: false,
  showForgotPasswordModal: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showSignupModal(state) {
      state.isRegistering = true;
    },
    hideSignupModal(state) {
      state.isRegistering = false;
    },
    showLoginModal(state) {
      state.isLogining = true;
    },
    hideLoginModal(state) {
      state.isLogining = false;
    },
    setShowForgotPasswordModal(state) {
      state.isLogining = false;
      state.showForgotPasswordModal = true;
    },
    setHideForgotPasswordModal(state) {
      state.showForgotPasswordModal = false;
    },
    setBackToLoginModal(state) {
      state.showForgotPasswordModal = false;
      state.isLogining = true;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
