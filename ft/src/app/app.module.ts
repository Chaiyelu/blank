import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { Ionic2RatingModule } from 'ionic2-rating';

import { FoodSellerModule } from "../pages/foodseller/foodseller.module";
import { SharedModule } from "../shared/shared.module";
import { FoodSellerComponent } from "../pages/foodseller/foodseller.component";
import { FoodSellerDetailComponent } from '../pages/foodseller/foodsellerdetail/foodsellerdetail.component';

import { MyApp } from './app.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';
import { TabsComponent } from '../pages/tabs/tabs.component';
import { OrderComponent } from '../pages/order/order.component';

@NgModule({
  declarations: [
    MyApp,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TabsComponent,
    OrderComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FoodSellerModule,
    SharedModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      showBackdrop: true,
      enableBackdropDismiss: true
    }, {
        links: [
          // { component: FoodSellerComponent, name: 'FoodSeller', segment: 'foodseller' },
          // { component: FoodSellerDetailComponent, name: 'FoodSellerDetail', segment: 'foodseller/:id' }
        ]
      }),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TabsComponent,
    OrderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
