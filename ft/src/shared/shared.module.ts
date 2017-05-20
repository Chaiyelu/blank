import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CartcontrolComponent } from "./components/cartcontrol/cartcontrol.component";
import { ShopcartComponent } from "./components/shopcart/shopcart.component";
import { ShopcartList } from "./components/shopcart/shopcart-list/shopcart-list";
import { SplitComponent } from "./components/split/split.component";
import { RatingselectComponent } from "./components/ratingselect/ratingselect.component";
import { LoginpageComponent } from "./components/loginpage/loginpage.component";
import { RegsiterpageComponent } from "./components/regsiterpage/regsiterpage.component";
import { ListHeaderComponent } from "./components/list-header/list-header.component";

@NgModule({
  declarations: [
    CartcontrolComponent,
    ShopcartComponent,
    ShopcartList,
    SplitComponent,
    RatingselectComponent,
    LoginpageComponent,
    RegsiterpageComponent,
    ListHeaderComponent
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    CartcontrolComponent,
    ShopcartComponent,
    ShopcartList,
    SplitComponent,
    RatingselectComponent,
    LoginpageComponent,
    RegsiterpageComponent,
    ListHeaderComponent
  ],
  exports: [
    CartcontrolComponent,
    ShopcartComponent,
    ShopcartList,
    SplitComponent,
    RatingselectComponent,
    LoginpageComponent,
    RegsiterpageComponent,
    IonicModule,
    ListHeaderComponent
  ],
  providers: [

  ]
})
export class SharedModule {
  // static forRoot();
}
