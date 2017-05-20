import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-home',
  templateUrl: 'order-home.component.html'
})

export class OrderHomeComponent implements OnInit {

  ngOnInit() { }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
