export interface DataType {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

export interface ToysStateType {
  array: DataType[];
  likesArr: boolean;
  favorite: boolean;
  favoriteArr: DataType[];
  year: string;
  count: string;
}

export interface SearchFilterType {
  color?: string;
  count?: string;
  shape?: string;
  size?: string;
  years?: string;
}
