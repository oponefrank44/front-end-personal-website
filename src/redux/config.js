import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
 togglevalue: true,
}

export const InvertedColor = createSlice({
  name: 'InvertedColour',
  initialState,
  reducers: {
    toggleInvertedColour: (state) => {
      state.togglevalue = !state.togglevalue;
     
    }
  },
})

export const dropDownMenuSlice = createSlice({
  name: 'dropDownMenu',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleDropDownMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeDropDown: (state) => {
      state.isOpen = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleInvertedColour } = InvertedColor.actions
export const { toggleDropDownMenu, closeDropDown } = dropDownMenuSlice.actions

export const store = configureStore({
  reducer: {
    invertedColour: InvertedColor.reducer,
    dropDownMenu: dropDownMenuSlice.reducer,
  },
})

export default store