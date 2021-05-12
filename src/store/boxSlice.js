import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxes: [
        {
          id: 1,
          name: 'Item Image',
          category: 'liquid',
          price: 10,
          priceUnit: '$',
          image: '#000',
          howMany: 0
        },
        {
          id: 2,
          name: 'Item Image',
          category: 'solid',
          price: 20,
          priceUnit: '$',
          image: '#ddd',
          howMany: 0
        },
        {
          id: 3,
          name: 'Item Image',
          category: 'liquid',
          price: 30,
          priceUnit: '$',
          image: '#f00',
          howMany: 0
        },
        {
          id: 4,
          name: 'Item Image',
          category: 'liquid',
          price: 40,
          priceUnit: '$',
          image: '#ddd',
          howMany: 0
        },
  ],
  selectedBoxType: '',
  steps: [
    {id: 1, title: 'Step - 1', subText: 'Hello world'},
    {id: 2, title: 'Step - 2', subText: 'Hello world 2'},
    {id: 3, title: 'Step - 3', subText: 'Hello world 3'},
    {id: 4, title: 'Step - 4', subText: 'Hello world 4'}
  ],
  selectedSteps: [
    {id: 1, title: 'Step - 1', subText: 'Hello world'},
  ],
  paymentStatus: '',
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

