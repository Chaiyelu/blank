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
import { RegStep1Component } from "./components/regsiterpage/reg-step1/reg-step1.component";
import { RegStep2Component } from "./components/regsiterpage/reg-step2/reg-step2.component";
import { RegStep3Component } from "./components/regsiterpage/reg-step3/reg-step3.component";
import { StepComponent } from "./components/step/step.component";
import { SortbarComponent } from "./components/sortbar/sortbar.component";
import { SortbarButtonComponent } from "./components/sortbar-button/sortbar-button.component";

import { HideMobilePipe } from "./pipes/hidemobile.pipe";

import { CityPickerService } from "./service/city-data.service";
import { CheckcodeService } from "./service/checkcode.service";

@NgModule({
  declarations: [
    CartcontrolComponent,
    ShopcartComponent,
    ShopcartList,
    SplitComponent,
    RatingselectComponent,
    LoginpageComponent,
    RegsiterpageComponent,
    ListHeaderComponent,
    RegStep1Component,
    RegStep2Component,
    RegStep3Component,
    StepComponent,
    SortbarComponent,
    SortbarButtonComponent,
    HideMobilePipe
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
    ListHeaderComponent,
    RegStep1Component,
    RegStep2Component,
    RegStep3Component,
    StepComponent,
    SortbarComponent,
    SortbarButtonComponent
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
    ListHeaderComponent,
    RegStep1Component,
    RegStep2Component,
    RegStep3Component,
    StepComponent,
    SortbarComponent,
    SortbarButtonComponent
  ],
  providers: [
    CityPickerService,
    CheckcodeService
  ]
})
export class SharedModule {
  // static forRoot();
}
