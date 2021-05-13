import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxes: [
        {
          id: 1,
          name: 'Item Image',
          category: 'liquid',
          price: 10,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0
        },
        {
          id: 2,
          name: 'Item Image',
          category: 'solid',
          price: 20,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0
        },
        {
          id: 3,
          name: 'Item Image',
          category: 'liquid',
          price: 30,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0
        },
        {
          id: 4,
          name: 'Item Image',
          category: 'solid',
          price: 40,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0
        },
        {
          id: 5,
          name: 'Item Image',
          category: 'liquid',
          price: 50,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0
        },
        {
          id: 6,
          name: 'Item Image',
          category: 'solid',
          price: 60,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0
        },
        {
          id: 7,
          name: 'Item Image',
          category: 'liquid',
          price: 70,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0
        },
        {
          id: 8,
          name: 'Item Image',
          category: 'solid',
          price: 80,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0
        },
        {
          id: 9,
          name: 'Item Image',
          category: 'liquid',
          price: 90,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0
        },
        {
          id: 10,
          name: 'Item Image',
          category: 'solid',
          price: 10,
          priceUnit: '$',
          image: '#899ba2',
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
  count: 1
}

const boxSlice = createSlice({
    name: 'boxName',
    initialState,
    reducers: {
      increment: (state) => {
        state.howMany += 1;
      },
      decrement: (state) => {
        state.howMany -= 1;
      },
      incrementByAmount: (state, action) => {
        state.howMany += action.payload;
      },
      selectedStep: (state, action) => {
        state.selectedSteps = action.payload;
      },
      selectedBox: (state, action) => {
        state.selectedBoxType = '';
      }
    }
});

// Action creators are generated for each case reducer function
export const {
  increment, decrement, incrementByAmount, selectedStep, selectedBox
} = boxSlice.actions
export default boxSlice.reducer

