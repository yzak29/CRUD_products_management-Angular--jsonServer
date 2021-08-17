export enum DataStateEnum{
  LOADED,
  LOADING,
  ERROR
}

export interface AppDataState<T>{
  dataState? : DataStateEnum;
  data? : T;
  errorMessage? : string;
}

export enum ProductActionsTypes{
  GET_ALL_PRODUCTS = "[Product] Get All Products",
  GET_SELECTED_PRODUCTS = "[Product] Get Selected Products",
  GET_AVAILABLE_PRODUCTS = "[Product] Get Available Products",
  SEARCH_PRODUCTS = "[Product] Search Products",
  SELECT_PRODUCT = "[Product] Select Product",
  DELETE_PRODUCT = "[Product] Delete Product",
  UPDATE_PRODUCT = "[Product] Update Product"
}

export interface ActionEvent{
  type : ProductActionsTypes ;
  payload? : any ;
}
