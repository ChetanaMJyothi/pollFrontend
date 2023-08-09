import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogIn: false,
  savedUserId: '',
  savedToken:'',
}

export const validSlice = createSlice({
  name: 'poll',
  initialState,
  reducers: {
    logoutUser: (state) => {
     
      state.isLogIn = false;
    },
    loginUser :(state)=>{
        state.isLogIn =true;
    },
    saveUserId:(state,actions)=>{
      state.savedUserId = actions.payload;
    },
    saveUserToken:(state,actions)=>{
      state.savedToken = actions.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {logoutUser, loginUser,saveUserId, saveUserToken } = validSlice.actions

export default validSlice.reducer