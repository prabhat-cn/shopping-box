import { configureStore } from '@reduxjs/toolkit'
import boxReducer from './boxSlice'

export default configureStore({
    reducer: {
       boxName: boxReducer
    },
  })
  



