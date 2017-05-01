import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule ,Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { MyApp } from './app.component';

import { FoodSellerModule } from "../pages/foodseller/foodseller.module";
import { FoodSellerComponent } from "../pages/foodseller/foodseller.component";
import { FoodSellerDetailComponent } from '../pages/foodseller/foodsellerdetail/foodsellerdetail.component';

import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';
import { TabsComponent } from '../pages/tabs/tabs.component';
import { OrderComponent } from '../pages/order/order.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    FoodSellerModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
    },{
      links: [
        // { component: FoodSellerComponent, name: 'FoodSeller', segment: 'foodseller' },
        // { component: FoodSellerDetailComponent, name: 'FoodSellerDetail', segment: 'foodseller/:id' }
      ]
    }),
    SuperTabsModule.forRoot()
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
