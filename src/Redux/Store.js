
// We get ConfigureStore and createSlice from Redux-Toolkit

// We get useSelector , useDispatch and provider from React-Redux

// How does redux Toolkit works 
// When we press{addition{actions} happeend due to reducer} button reducer applied
// In slice also we create reducer in Slice  then we provide data to  Store.js{It has all the data} then we can acces it in whole everywhere app
// We have to pass in root comp so that reducers can be use  everwhere e.g. App.jsx

// store is global store by which can get data to any component

// useSelector to select and useDispatch for dispatching the data
// State is the condition of the app at a specific point of time


// Action is paremeter that has type of action and payload{data} it's witten in objects that;s why we write like this  add:1
// const addTodoAction = {
  // type: 'todos/todoAdded',
  // payload: 'Buy milk'
// }   

// Reducer: A reducer is a function that tells what to do with state of project: (state, action) => newState

// Selectors are functions that know how to extract specific pieces of information from a store state value
import CartSlice from "./CartSlice";
import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
// Store name should{not needed but do it} match fileName cases should be same

export const Store = configureStore({
  reducer: {
    // here was the problem that I was not able to get the data 
    // try cart: CartSlice 
    // just write CartSlice file name that's it
     CartSlice,
     SearchSlice
  }, 
});

// console.log(Store.getState())

export default Store;
















