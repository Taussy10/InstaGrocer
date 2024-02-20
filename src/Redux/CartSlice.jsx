
// import { createSlice } from "@reduxjs/toolkit";

// // ()
// // Slice is piece of pizza{store} that has name of slice , initalState{weather something slice has or not e.g. 2Kg Apple}  



//  // why did we make a new varialbe
//       // Imagine you have 500 bank balance then you went bank and withdraw 200 so new balance = 500{balance} - 200 
//       // new balance = 300 {understand why do we use another variable otherwise new balance won't save anywhere casue balnce variable has 200 only}

//       // // state = balance = 500 - action = 200 = 300 
      
//       // action: remove {action has 2 things type = remove payload = data = 200} 
//       // store = bank
//       // reducer = functionality, new balance =  balance - remove 
//       // dispatch = for sending account of man that goes to bank


// // cartSlice word should be in camelCase 
// export const cartSlice = createSlice({
//   name: "Cart",
//   initialState: {
//     cart: [],
//   },
  
// //  Reducer = functionality to do e.g. adding to Cart
//   reducers: {
//       // One reducer has two parameters 
//   // 1.state of that cart{has something or not}
//   // 2. action: to do pushing{adding} to cart
//   // Check weather it's action or actions
//     addToCart: (state, actions) => {
//       // first check the data is there aren't you have heard of array method called find
//       // state = state of project you can think as object{basically data from Data.js}
//       // you should know what is value if not learn find method
//       // value.name = if inside data{value} you get name = action.payload.name{data that we will send by us basically action will done } then yeah exist   
//       const isAvailable = state.find((value) => value.name === actions.payload.name);

//       if (isAvailable) {
//         actions.payload["quantity"] += 1;
//         // Try also by commenting one  console.log("added to cart");
       
//       } else {
//         // we do destructre and push inside state if product not avalible in state {project} also one value quantity: 1
//         state.push({...actions.payload, quantity: 1});
//       }},


//     removeFromCart: (state, actions) => {
//       // filter method so that we can filter we click on any product id and it's delte
//      const newList = state.filter((value)=>
//       value.name != actions.payload.name
//      )
//     return (state = newList)
//     },
//     incrementQty: (state, action) => {
//       const isAvailable = state.find((value) => value.name === action.payload.name);
//      if (isAvailable) {
//         isAvailable.quantity + 1;
//      } else {
//       console.log("Not available");
//      }
//     },


//     // incrementQty: (state) => state + 1,
//     // decrementQty: (state) => state - 1,
    
//     decrementQty: (state, action) => {
//       const isAvailable = state.find((value) => value. name === action.payload.name);
//        if (isAvailable === 1) {
//         // so that qty can't be less than 1
//         isAvailable.quantity = 1;
        
//        } else {
//         isAvailable.quantity - 1;
//        }
//     },
//   },
// });


// // export the reducers so that we can use for functiolity we destructure make sure you do .actions not action
// // export all the actions that's why CartSlice.actions;
// export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;

//  //TODO: Will it be reducers or reducer cause we made as reducers
// export default cartSlice.reducer;




// alwasy create slice in this way
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] ,

  //  {
  //   cart: [],
  // },
  
  // state can be 20 and you do action and add 1 = 21
  reducers: {
    addToCart: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.name == actions.payload.name
      );
      if (isAvailable) {
        actions.payload["quantity"] += 1; // increase quantity by one
      } else {
        state.push({ ...actions.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, actions) => {
      const newList = state.filter(
        (value) => value.name != actions.payload.name
      );
      return (state = newList);
    },

    incrementQty: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.name == actions.payload.name
      );

      if (isAvailable) {
        isAvailable.quantity++;
      } else {
        console.log("not available");
      }
    },
    decrementQty: (state, actions) => {
      const isAvailable = state.find(
        (value) => value.name == actions.payload.name
      );

      if (isAvailable.quantity == 1) {
        isAvailable.quantity = 1;
      } else {
        isAvailable.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;

// we are exporting cartSlice reducer not cartSlice whole file
export default cartSlice.reducer;













