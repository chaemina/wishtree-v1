import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishProps } from "../../types/WishProps";

const initialState: WishProps = {
    content: '',
    obj_id: 1,
};

export const TemplateWishSlice = createSlice({
  name: 'templateWish',
  initialState,
  reducers: {
    setWish(state, action: PayloadAction<Partial<WishProps>>) {
      return { ...state, ...action.payload };
    },
    setContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
    setObjId(state, action: PayloadAction<number>) {
      state.obj_id = action.payload;
    },
    // 추가적인 개별 필드 업데이트 리듀서가 필요하면 추가할 수 있습니다.
  },
});

export const { setWish, setContent, setObjId } = TemplateWishSlice.actions;
export default TemplateWishSlice.reducer;