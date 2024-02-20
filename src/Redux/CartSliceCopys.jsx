import { createSlice } from "@reduxjs/toolkit";

// ()
const cartSlice = createSlice({
    name:"Cart",
    initialState: [],

    reducers:{
        addToCart: () =>{
        
        },
        removeFromCart: () =>{
        
        },
        incrementQty: () =>{
        
        },
        decrementQty: () =>{
        
        },

    }

})  

export const {addToCart, removeFromCart, incrementQty, decrementQty} = cartSlice.actions 

export default cartSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// ()

// Slice is piece of pizza{store} that has name of slice , initalState{weather something slice has or not e.g. 2Kg Apple}  



 // why did we make a new varialbe
      // Imagine you have 500 bank balance then you went bank and withdraw 200 so new balance = 500{balance} - 200 
      // new balance = 300 {understand why do we use another variable otherwise new balance won't save anywhere casue balnce variable has 200 only}

      // // state = balance = 500 - action = 200 = 300 
      
      // action: remove {action has 2 things type = remove payload = data = 200} 
      // store = bank
      // reducer = functionality, new balance =  balance - remove 
      // dispatch = for sending account of man that goes to bank

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  
//  Reducer = functionality to do e.g. adding to Cart
  reducers: {
      // One reducer has two parameters 
  // 1.state of that cart{has something or not}
  // 2. action: to do pushing{adding} to cart
    addToCart: (state, action) => {
      // first check the data is there aren't you have heard of array method called find
      // state = state of project you can think as object{basically data from Data.js}
      // you should know what is value if not learn find method
      // value.name = if inside data{value} you get name = action.payload.name{data that we will send by us basically action will done } then yeah exist   
      const isAvailable = state.find((value) => value.name === action.payload.name);

      if (isAvailable) {
        action.payload["quantity"] += 1;
      } else {
        // we do destructre and push inside state if product not avalible in state {project} also one value quantity: 1
        state.push({...action.payload, quantity: 1});
      }},
    removeFromCart: (state, action) => {
      // filter method so that we can filter we click on any product id and it's delte
     const newList = state.filter((value)=>
      value.name != action.payload.name
     )
    return (state = newList)
    },
    // incrementQty: (state, action) => {
    // //   const isAvailable = state.find((value) => value.name === action.payload.name);
    // //  if (isAvailable) {
    // //     isAvailable.quantity + 1;
    // //  } else {
    // //   console.log("Not available");
    // //  }
  
    // },
    incrementQty: (state) => state + 1,
    decrementQty: (state) => state - 1,
    
    // decrementQty: (state, action) => {
    //   const isAvailable = state.find((value) => value. name === action.payload.name);
    //    if (isAvailable === 1) {
    //     isAvailable.quantity = 1;
        
    //    } else {
    //     isAvailable.quantity - 1;
    //    }
    // },
  },
});


// export the reducers so that we can use for functiolity we destructure make sure you do .actions not action
// export all the actions that's why CartSlice.actions;
// export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions;

 //TODO: Will it be reducers or reducer cause we made as reducers
// export default CartSlice.reducer;






















