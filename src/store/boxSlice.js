import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxes: [
    {
      "id": 1,
      "name": "Item-1",
      "image": "Item Image",
      "category": "Solid",
      "quantity": 10,
      "currency": "$",
      "price": 20
    },
    {
      "id": 2,
      "name": "Item-2",
      "image": "Item Image",
      "category": "Solid",
      "quantity": 10,
      "currency": "$",
      "price": 20
    },
    {
      "id": 3,
      "name": "Item-3",
      "image": "Item Image",
      "category": "Solid",
      "quantity": 10,
      "currency": "$",
      "price": 20
    },
    {
      "id": 4,
      "name": "Item-4",
      "image": "Item Image",
      "category": "White Box",
      "quantity": 10,
      "currency": "$",
      "price": 20
    },
    {
      "id": 5,
      "name": "Item-1",
      "image": "Item Image",
      "category": "Black Box",
      "quantity": 10,
      "currency": "$",
      "price": 20
    },
    {
      "id": 6,
      "name": "Item-2",
      "image": "Item Image",
      "category": "Black Box",
      "quantity": 10,
      "currency": "$",
      "price": 20
    },
    {
      "id": 7,
      "name": "Item-3",
      "image": "Item Image",
      "category": "Black Box",
      "quantity": 10,
      "currency": "$",
      "price": 20
    },
    {
      "id": 8,
      "name": "Item-4",
      "image": "Item Image",
      "category": "Black Box",
      "quantity": 10,
      "currency": "$",
      "price": 20
    },
    
  ],
  box: "",
  count: 0, 
  status: null,
}

const boxSlice = createSlice({
    name: 'boxName',
    initialState,
    reducers: {
      increment: (state) => {
        state.count += 1;
      },
      decrement: (state) => {
        state.count -= 1;
      },
      incrementByAmount: (state, action) => {
        state.count += action.payload;
      }
    }
});

// Action creators are generated for each case reducer function
export const {
  increment, decrement, incrementByAmount
} = boxSlice.actions
export default boxSlice.reducer

