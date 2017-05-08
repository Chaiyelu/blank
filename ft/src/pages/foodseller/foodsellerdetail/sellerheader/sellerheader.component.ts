import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from "ionic-angular";
import { HeaderdetailComponent } from "./headerdetail/headerdetail.component";

@Component({
	selector: 'sellerheader',
	templateUrl: 'sellerheader.component.html'
})

export class SellerheaderComponent implements OnInit {
	@Input() seller: object;

  private classMap:String[];
  detailShow: boolean = false;
  constructor(
    public modalCtrl:ModalController
  ){
    this.classMap = ['decrease','discount','special','invoice','guarantee'];
  }

  ngOnInit(){

  }

  showDetail(){
    let headerDetailModal = this.modalCtrl.create(HeaderdetailComponent,{seller:this.seller});
    headerDetailModal.present();
    // this.detailShow = true;
  }

  // hideDetail(){
  //   this.detailShow = false;
  // }
}
