import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Data from "../../data/data";
import { DataType, SearchFilterType, ToysStateType } from "../types/ToysTypes";

const initialState: ToysStateType = {
  array: JSON.parse(localStorage.getItem("filteredData") as string) || Data,
  likesArr: Boolean(localStorage.getItem("likedArrStatus")) || false,
  favoriteArr: JSON.parse(localStorage.getItem("favoriteArr") as string) || [],
  favorite: false,
  count: localStorage.getItem("Year") || "12",
  year: localStorage.getItem("Count") || "2020",
};

export const filterSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    filteredData: (state, action: PayloadAction<SearchFilterType>) => {
      let obj: SearchFilterType | any = {};
      for (const [key, value] of Object.entries(action.payload)) {
        if ((value as string).length > 0) {
          obj[key] = value;
        }
      }

      const keysArr: string[] = Object.keys(obj);
      const valuesArr: string[] = Object.values(obj);

      if (keysArr.length === 1) {
        const values: string[] = valuesArr[0].split(",");

        const arr: DataType[] = [];
        Data.filter((el) => {
          const elemValues = Object.values(el);

          for (let i = 0; i < values.length; i++) {
            if (elemValues.includes(values[i])) {
              arr.push(el);
            }
          }
        });

        state.array = arr;
        localStorage.setItem("filteredData", JSON.stringify(arr));
      } else if (keysArr.length === 2) {
        const firstValues = valuesArr[0].split(",");
        const secondValues = valuesArr[1].split(",");

        const arr: DataType[] = [];
        Data.filter((el) => {
          const elemValues = Object.values(el);
          for (let i = 0; i < firstValues.length; i++) {
            for (let j = 0; j < secondValues.length; j++) {
              if (
                elemValues.includes(secondValues[j]) &&
                elemValues.includes(firstValues[i])
              ) {
                arr.push(el);
              }
            }
          }
        });
        state.array = arr;
        localStorage.setItem("filteredData", JSON.stringify(arr));
      } else if (keysArr.length === 3) {
        const firstValues = valuesArr[0].split(",");
        const secondValues = valuesArr[1].split(",");
        const thirdValues = valuesArr[2].split(",");
        const arr: DataType[] = [];
        Data.filter((el) => {
          const elemValues = Object.values(el);
          for (let i = 0; i < firstValues.length; i++) {
            for (let j = 0; j < secondValues.length; j++) {
              for (let z = 0; z < thirdValues.length; z++) {
                if (
                  elemValues.includes(firstValues[i]) &&
                  elemValues.includes(secondValues[j]) &&
                  elemValues.includes(thirdValues[z])
                ) {
                  arr.push(el);
                }
              }
            }
          }
        });
        state.array = arr;
        localStorage.setItem("filteredData", JSON.stringify(arr));
      } else {
        state.array = [];
        localStorage.removeItem("filteredData");
      }
    },

    selectLikes: (state) => {
      state.likesArr = !state.likesArr;
      if (state.likesArr) {
        const arr = state.array.filter((el) => el.favorite);
        state.array = arr;
      } else {
        state.array =
          JSON.parse(localStorage.getItem("filteredData") as string) || Data;
      }
      localStorage.setItem("likedArrStatus", state.likesArr.toString());
    },

    selectFavorite: (state, action: PayloadAction<number>) => {
      const likedArr: DataType[] = [];
      const arr = state.array.map((el) => {
        if (+el.num === action.payload) {
          el.favorite = !el.favorite;
        }
        if (el.favorite) {
          likedArr.push(el);
        }
        return el;
      });
      state.array = arr;
      state.favoriteArr = likedArr;
      localStorage.setItem("favoriteArr", JSON.stringify(likedArr));
      localStorage.setItem("filteredData", JSON.stringify(arr));
    },

    selectYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
      const year = state.array.filter((el) => el.year <= state.year);
      state.array = year;
      if (year.length > 0) {
        const SaveState = JSON.stringify(year);
        localStorage.setItem("filteredData", SaveState);
        localStorage.setItem("Year", action.payload);
      } else {
        state.array = [];
      }
    },
    selectCount: (state, action: PayloadAction<string>) => {
      state.count = action.payload;
      const count = state.array.filter((el) => el.count <= state.count);
      state.array = count;
      if (count.length > 0) {
        const SaveState = JSON.stringify(count);
        localStorage.setItem("filteredData", SaveState);
        localStorage.setItem("Count", action.payload);
      } else {
        state.array = [];
      }
    },
    resetArr: (state) => {
      localStorage.removeItem("likedArrStatus");
      localStorage.removeItem("likedArr");
      localStorage.removeItem("Year");
      localStorage.removeItem("Count");
      localStorage.removeItem("filteredData");
      state.array = Data;
    },
    sortStartName: (state) => {
      const sort = state.array.sort((a, b) => a.name.localeCompare(b.name));
      state.array = sort;
      if (sort.length > 0) {
        const SaveState = JSON.stringify(sort);
        localStorage.setItem("filteredData", SaveState);
      } else {
        state.array = [];
      }
    },
    sortEndName: (state) => {
      const sort = state.array.sort((a, b) => b.name.localeCompare(a.name));
      state.array = sort;
      if (sort.length > 0) {
        const SaveState = JSON.stringify(sort);
        localStorage.setItem("filteredData", SaveState);
      } else {
        state.array = [];
      }
    },
    sortAscending: (state) => {
      const sort = state.array.sort((a, b) => +a.count - +b.count);
      state.array = sort;
      if (sort.length > 0) {
        const SaveState = JSON.stringify(sort);
        localStorage.setItem("filteredData", SaveState);
      } else {
        state.array = [];
      }
    },
    sortDescending: (state) => {
      const sort = state.array.sort((a, b) => +b.count - +a.count);
      state.array = sort;
      if (sort.length > 0) {
        const SaveState = JSON.stringify(sort);
        localStorage.setItem("filteredData", SaveState);
      } else {
        state.array = [];
      }
    },
  },
});

export const {
  filteredData,
  sortStartName,
  sortEndName,
  sortAscending,
  sortDescending,
  resetArr,
  selectYear,
  selectCount,
  selectLikes,
  selectFavorite,
} = filterSlice.actions;

export default filterSlice.reducer;
