import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'sellerheader',
	templateUrl: 'sellerheader.component.html'
})

export class SellerheaderComponent implements OnInit {
	@Input() seller: object;

  private classMap:String[];
  detailShow: boolean = false;
  constructor(){
    this.classMap = ['decrease','discount','special','invoice','guarantee'];
  }

  ngOnInit(){

  }

  showDetail(){
    this.detailShow = true;
  }

  hideDetail(){
    this.detailShow = false;
  }
}
