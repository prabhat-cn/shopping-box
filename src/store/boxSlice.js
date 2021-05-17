import { createSlice, current } from "@reduxjs/toolkit";
import {orderBy, map} from 'lodash'

const initialState = {
  boxes: [
        {
          id: 1,
          name: 'Black Image',
          category: 'liquid',
          price: 10,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0
        },
        {
          id: 2,
          name: 'White Image',
          category: 'solid',
          price: 20,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0
        },
        {
          id: 3,
          name: 'Black Image',
          category: 'liquid',
          price: 30,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0
        },
        {
          id: 4,
          name: 'White Image',
          category: 'solid',
          price: 30,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0
        },
        {
          id: 5,
          name: 'Black Image',
          category: 'liquid',
          price: 50,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0
        },
        {
          id: 6,
          name: 'White Image',
            category: 'solid',
          price: 60,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0
        },
        {
          id: 7,
          name: 'Black Image',
          category: 'liquid',
          price: 70,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0
        },
        {
          id: 8,
          name: 'White Image',
            category: 'solid',
          price: 80,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0
        },
        {
          id: 9,
          name: 'Black Image',
          category: 'liquid',
          price: 90,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0
        },
        {
          id: 10,
          name: 'White Image',
          category: 'solid',
          price: 10,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0
        },
  ],
  mainBoxes: [
    {
      id: 1,
      name: 'Black Image',
      category: 'liquid',
      price: 10,
      priceUnit: '$',
      image: '#607d8b',
      howMany: 0
    },
    {
      id: 2,
      name: 'White Image',
      category: 'solid',
      price: 20,
      priceUnit: '$',
      image: '#899ba2',
      howMany: 0
    },
    {
      id: 3,
      name: 'Black Image',
      category: 'liquid',
      price: 30,
      priceUnit: '$',
      image: '#607d8b',
      howMany: 0
    },
    {
      id: 4,
      name: 'White Image',
      category: 'solid',
      price: 30,
      priceUnit: '$',
      image: '#899ba2',
      howMany: 0
    },
    {
      id: 5,
      name: 'Black Image',
      category: 'liquid',
      price: 50,
      priceUnit: '$',
      image: '#607d8b',
      howMany: 0
    },
    {
      id: 6,
      name: 'White Image',
        category: 'solid',
      price: 60,
      priceUnit: '$',
      image: '#899ba2',
      howMany: 0
    },
    {
      id: 7,
      name: 'Black Image',
      category: 'liquid',
      price: 70,
      priceUnit: '$',
      image: '#607d8b',
      howMany: 0
    },
    {
      id: 8,
      name: 'White Image',
        category: 'solid',
      price: 80,
      priceUnit: '$',
      image: '#899ba2',
      howMany: 0
    },
    {
      id: 9,
      name: 'Black Image',
      category: 'liquid',
      price: 90,
      priceUnit: '$',
      image: '#607d8b',
      howMany: 0
    },
    {
      id: 10,
      name: 'White Image',
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
}

const boxSlice = createSlice({
    name: 'boxName',
    initialState,
    reducers: {
      increment: (state, action) => {
        // console.log(action.payload, action.payload.howMany)

        let singleData = {...action.payload};
        console.log(singleData.id);

        const filter = state.boxes.filter(m => {
          if(m.id === singleData.id) {
            m.howMany += 1;
            return m;
          }
        });

        // console.log(current(filter[0]));

        // state.boxes = {...state.boxes, )}


        // action.payload.howMany += 1;
        // console.log(action.payload)
        // state.boxes.howMany += 1
        // console.log(current(state.boxes).howMany)
      },
      decrement: (state, action) => {
        let singleData = {...action.payload};
        console.log(singleData.id);

        const filter = state.boxes.filter(m => {
          if(m.id === singleData.id) {
            m.howMany -= 1;
            return m;
          }
        });
        // state.howMany -= 1;
      },
      incrementByAmount: (state, action) => {
        state.howMany += action.payload;
      },
      selectedStep: (state, action) => {
        state.selectedSteps = action.payload;
      },
      selectedBox: (state, action) => {
        state.selectedBoxType = action.payload;
      },
      sort: (state, action) => {

        let newData = [];

        // console.log(current(state.boxes), current(state.mainBoxes));

        if(action.payload === 'all') {
          newData = map(state.mainBoxes);
        } else if(action.payload === 'hl') {
          newData = orderBy(state.boxes, ['price'], ['desc']);
        } else {
          newData = orderBy(state.boxes, ['price'], ['asc']);
        }
         
        state.boxes = newData;  
          
      },
    }
});

// Action creators are generated for each case reducer function
export const {
  increment, decrement, incrementByAmount, selectedStep, selectedBox, sort
} = boxSlice.actions
export default boxSlice.reducer

