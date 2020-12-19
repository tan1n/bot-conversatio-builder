import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../features/message/messageSlice';
import linkReducer from '../features/linkSlice';
import counterReducer from '../features/counterSlice';

export default configureStore({
  reducer: {
    messages: messageReducer,
    links: linkReducer,
    counter: counterReducer,
  },
});
