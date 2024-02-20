import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name:"search",
  // intialState search is null = nothing cause intially you don;t search anything just a basic common sense
  initialState:{
    search:" "
  },
reducers:{
  setSearch: (state,actions)=>{
    state.search=actions.payload;
  } 
}
}) ;

export const {setSearch} = searchSlice.actions;
// you have to export reducer not  reducer is part of RTK and that's coming from createSlice method and we have to use it not reducers from here
export default searchSlice.reducer;