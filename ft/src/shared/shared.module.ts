import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CartcontrolComponent } from "./components/cartcontrol/cartcontrol.component";
import { ShopcartComponent } from "./components/shopcart/shopcart.component";
import { ShopcartList } from "./components/shopcart/shopcart-list/shopcart-list";
import { SplitComponent } from "./components/split/split.component";

@NgModule({
  declarations: [
    CartcontrolComponent,
    ShopcartComponent,
    ShopcartList,
    SplitComponent
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    CartcontrolComponent,
    ShopcartComponent,
    ShopcartList,
    SplitComponent
  ],
  exports: [
    CartcontrolComponent,
    ShopcartComponent,
    ShopcartList,
    SplitComponent,
    IonicModule
  ],
  providers: [

  ]
})
export class SharedModule {
  // static forRoot();
}
