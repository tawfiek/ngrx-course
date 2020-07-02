export interface Action {
  type: string;
}

export interface ReducerMap {
  [key: string]: Function;
}

export interface State {
  [key: string]: any;
}

export interface Resort {
  id: string;
  name: string;
  lat: string;
  lng: string;
  status: string;
  url: string;
}
