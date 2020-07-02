import { Component, OnInit } from '@angular/core';
import { Resort } from './store/models';
import { initialSidenavState } from './store/reducers';
import { Store } from './store/store';
import { store } from './store';
import { HideSidenav, ShowSidenav } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  store: Store;
  resorts: Resort[] = [];
  sidenavHidden = initialSidenavState.opened;
  // todo: declare sidenavHidden boolean property

  // todo: define store property

  ngOnInit() {
    this.store = store;
    // this.store.dispatch(new LoadResorts());
    this.store.subscribe(state => {
      this.sidenavHidden = !state.opened
      console.log(state);
    });
  }

  hideSidenav() {
    this.store.dispatch(new HideSidenav())
  }

  identifyResort(resort: Resort) {
    return resort.id;
  }

  showSidenav() {
    this.store.dispatch(new ShowSidenav())
  }
}
