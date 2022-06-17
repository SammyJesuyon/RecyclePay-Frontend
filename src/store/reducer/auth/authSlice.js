import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import routes from 'apis/routes';
import { setAuthorizationHeader } from 'apis';

const name = 'authentication';

const authUser = createAsyncThunk(`${name}/login`, async (values) => {
  const res = await routes.auth.login(values);
  setAuthorizationHeader(res.data.token);
  return res.data;
});

const initialState = { isAuthorized: false, loading: false, user: {} };

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    logoutUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.fulfilled, (state, action) => {
        state.isAuthorized = true;
        state.loading = false;
        state.user = {
          user_type: action.payload.user_type,
          token: action.payload.token,
        };
      })
      .addCase(authUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(authUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const AUTH_ACTIONS = { ...authSlice.actions, authUser };

export default authSlice.reducer;
