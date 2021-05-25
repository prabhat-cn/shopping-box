import { createSlice, current } from "@reduxjs/toolkit";
import {orderBy, map} from 'lodash'

const initialState = {
  boxes: [
        {
          id: 1,
          name: 'Black Image',
          category: 'Liquid',
          price: 10,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0,
          selected: false,
        },
        {
          id: 2,
          name: 'White Image',
          category: 'Solid',
          price: 20,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0,
          selected: false,
        },
        {
          id: 3,
          name: 'Black Image',
          category: 'Liquid',
          price: 30,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0,
          selected: false,
        },
        {
          id: 4,
          name: 'White Image',
          category: 'Solid',
          price: 30,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0,
          selected: false,
        },
        {
          id: 5,
          name: 'Black Image',
          category: 'Liquid',
          price: 50,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0,
          selected: false,
        },
        {
          id: 6,
          name: 'White Image',
          category: 'Solid',
          price: 60,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0,
          selected: false,
        },
        {
          id: 7,
          name: 'Black Image',
          category: 'Liquid',
          price: 70,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0,
          selected: false,
        },
        {
          id: 8,
          name: 'White Image',
          category: 'Solid',
          price: 80,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0,
          selected: false,
        },
        {
          id: 9,
          name: 'Black Image',
          category: 'Liquid',
          price: 90,
          priceUnit: '$',
          image: '#607d8b',
          howMany: 0,
          selected: false,
        },
        {
          id: 10,
          name: 'White Image',
          category: 'Solid',
          price: 10,
          priceUnit: '$',
          image: '#899ba2',
          howMany: 0,
          selected: false,
        },
  ],
  mainBoxes: [
    {
      id: 1,
      name: 'Black Image',
      category: 'Liquid',
      price: 10,
      priceUnit: '$',
      image: '#607d8b',
      howMany: 0,
      selected: false,
    },
    {
      id: 2,
      name: 'White Image',
      category: 'Solid',
      price: 20,
      priceUnit: '$',
      image: '#899ba2',
      howMany: 0,
      selected: false,
    },
    {
      id: 3,
      name: 'Black Image',
      category: 'Liquid',
      price: 30,
      priceUnit: '$',
      image: '#607d8b',
      howMany: 0,
      selected: false,
    },
    {
      id: 4,
      name: 'White Image',
      category: 'Solid',
      price: 30,
      priceUnit: '$',
      image: '#899ba2',
      howMany: 0,
      selected: false,
    },
    {
      id: 5,
      name: 'Black Image',
      category: 'Liquid',
      price: 50,
      priceUnit: '$',
      image: '#607d8b',
      howMany: 0,
      selected: false,
    },
    {
      id: 6,
      name: 'White Image',
      category: 'Solid',
      price: 60,
      priceUnit: '$',
      image: '#899ba2',
      howMany: 0,
      selected: false,
    },
    {
      id: 7,
      name: 'Black Image',
      category: 'Liquid',
      price: 70,
      priceUnit: '$',
      image: '#607d8b',
      howMany: 0,
      selected: false,
    },
    {
      id: 8,
      name: 'White Image',
      category: 'Solid',
      price: 80,
      priceUnit: '$',
      image: '#899ba2',
      howMany: 0,
      selected: false,
    },
    {
      id: 9,
      name: 'Black Image',
      category: 'Liquid',
      price: 90,
      priceUnit: '$',
      image: '#607d8b',
      howMany: 0,
      selected: false,
    },
    {
      id: 10,
      name: 'White Image',
      category: 'Solid',
      price: 10,
      priceUnit: '$',
      image: '#899ba2',
      howMany: 0,
      selected: false,
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
      addToCart: (state, action)=> {
        let newData = [];
        state.boxes.map((item) =>
          item.id === action.id ? {...item, selected: true} : item,
          
        );
        // if (action.payload) {
        //   console.log(action.payload);
        //   let idBoxesAction = action.payload.boxes.id;
        //   console.log(idBoxesAction);
        //   }
      },
      removeFromCart: (state, action) => {
        state.boxes.map((item) =>
          item.id === action.id
            ? {...item, selected: false, howMany: 1}
            : item,
        );
      },
      addQuantity: (state, action) => {
        state.boxes.map((item) =>
        item.id === action.id
            ? {...item, howMany: item.howMany + 1}
            : item,
        );
      },
      subQuantity: (state, action) => {
        state.boxes.map(item =>
          item.id === action.id
            ? {
                ...item,
                quantity: item.howMany !== 1 ? item.howMany - 1 : 1,
              }
            : item,
        );
      },
      emptyCart: (state) => {
        state.boxes.map(item =>
          item.selected
            ? {...item, selected: false, howMany: 1}
            : item,
        );
      },

      paymentStatus: (state, action) => {
        state.paymentStatus = action.payload;
      }

    }
});

// Action creators are generated for each case reducer function
export const {
  increment, 
  decrement, 
  incrementByAmount, 
  selectedStep, 
  selectedBox, 
  sort, 
  addToCart, 
  removeFromCart, 
  addQuantity, 
  subQuantity, 
  emptyCart,
  paymentStatus
} = boxSlice.actions
export default boxSlice.reducer

