import { State } from './models';
import { SidenavAction, SidenavActionTypes } from './actions';

export const initialSidenavState: State = {
  opened: false
};

export const sidenavReducer = (
  state: State = initialSidenavState,
  action: SidenavAction
): State => {
  switch (action.type) {
    case SidenavActionTypes.HideSidenav:
      return {
        ...state,
        opened: false
      };
    case SidenavActionTypes.ShowSidenav:
      return {
        ...state,
        opened: true
      };
    default:
      return state;
  }
};
