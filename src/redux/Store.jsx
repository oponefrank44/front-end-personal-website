import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk(
  "auth/signup",
  async ({ email, password, names }) => {
    const user = { email, password, names };
    try {
      const res = await fetch("http://localhost:3000/auth/signup", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await res.json();
      const token=result.token
      localStorage.setItem("token",token);
      const expiration=new Date();
      expiration.setHours(expiration.getHours()+1)
      console.log(result);
      localStorage.setItem("expiration",expiration.toISOString());

      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const Login = createAsyncThunk(
  "/auth/login",
  async ({ email, password }) => {
    const user = { email, password };

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json ",
        },
        body: JSON.stringify(user),
      });
      const result = await res.json();
      const token = result.token;
      localStorage.setItem("token", token);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: "",
  errorstate: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = "";
      state.loading = false;
      state.errorstate = null;
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        (state.user = action.payload),
          (state.loading = false),
          (state.errorstate = false);
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.errorstate = "an error occrred";
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        (state.user = action.payload),
          (state.loading = false),
          (state.errorstate = false);
      })
      .addCase(Login.pending, (state) => {
        state.loading = true;
      })
      .addCase(Login.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.errorstate = "an error occrred";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
