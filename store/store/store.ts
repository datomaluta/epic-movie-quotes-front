import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { userSlice } from 'store/user'
import authSlice from '../auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export default store
