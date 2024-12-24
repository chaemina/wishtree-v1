import { combineReducers } from '@reduxjs/toolkit';
import TemplateWishReducer from './slice/TemplateWishSlice';

const RootReducer = combineReducers({
  templateWish: TemplateWishReducer, // TemplateWishSlice.reducer가 정확히 연결
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;
