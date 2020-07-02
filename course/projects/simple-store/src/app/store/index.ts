import { ReducerMap } from './models';
import { sidenavReducer } from './reducers';
import { Store } from './store';

const reducers: ReducerMap = {
  sidenav: sidenavReducer
};

export const store = new Store(reducers);
