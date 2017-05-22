import { Component } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { OrderComponent } from '../order/order.component';
import { UserComponent } from '../user/user.component';

@Component({
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomeComponent;
  tab2Root: any = AboutComponent;
  tab3Root: any = OrderComponent;
  tab4Root: any = UserComponent;

  constructor() {

  }
}
