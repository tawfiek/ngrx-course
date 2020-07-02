import { BehaviorSubject } from 'rxjs';
import { Action, ReducerMap, State } from './models';
import { initialSidenavState } from './reducers';

export class Store {
  private _sideNavState = new BehaviorSubject<State>(initialSidenavState);

  constructor(public reducers: ReducerMap, private state: State = {}) {}

  dispatch(action: Action) {
    this.notify(action);
  }

  notify(action: Action) {
    Object.keys(this.reducers).forEach(key => {
      this.state[key] = this.reducers[key](this.state[key], action);
      this._sideNavState.next(this.state[key]);
    });
  }

  subscribe(
    next: (value: State) => void,
    error?: (error: any) => void,
    complete?: () => void
  ) {
    return this._sideNavState.subscribe(next, error, complete);
  }

}
