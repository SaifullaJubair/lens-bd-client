import { createSlice } from "@reduxjs/toolkit";
import { ILens } from "../../../interface/ILens";

interface ISell {
  lensInfo: ILens[];
  name: string;
  quantity: number;
  sellDate: string;
}

const initialState: ISell = {
  lensInfo: [],
  name: "",
  quantity: 0,
  sellDate: "",
};
const sellsSlice = createSlice({
  name: "sells",
  initialState,
  reducers: {},
});

export default sellsSlice;
