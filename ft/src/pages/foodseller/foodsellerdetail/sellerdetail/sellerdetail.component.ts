import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "ionic-angular";
import { SellerModel } from "../../../../shared/models/seller.model";
import { FoodSellerDetailService } from "../foodsellerdetail.service";
import { CollectionMerchantService } from "../../../user/collect/merchant/merchant.service";
import { LoginpageComponent } from "../../../../shared/components/loginpage/loginpage.component";

@Component({
  selector: 'sellerdetail',
  templateUrl: 'sellerdetail.component.html'
})

export class SellerdetailComponent implements OnInit {
  seller: SellerModel;
  private classMap: string[];
  constructor(
    private foodSellerDetailService: FoodSellerDetailService,
    private collectionMerchantService: CollectionMerchantService,
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }

  ngOnInit() {
    this.seller = this.navParams.data;
    console.log(this.seller);
  }

  toggleFavorite() {
    //先判断是否登陆
    if (this.seller.collectionId !== 0) {
      this._delMerchantCollections();
    } else {
      this._addMerchantCollections();
    }
  }

  _delMerchantCollections() {
    this.collectionMerchantService.delMerchantCollections(this.seller.collectionId).subscribe(res => {
      this.seller.collectionId = 0;
      console.log('取消收藏成功');
    });
  }

  _addMerchantCollections() {
    this.collectionMerchantService.addMerchantCollections('seller', this.seller.id).subscribe(
      (res) => {
        this.seller.collectionId = res.data;
        console.log('收藏成功');
      },
      (err) => {
        if (401 == err.status) {
          let LoginModal = this.modalCtrl.create(LoginpageComponent);
          LoginModal.present();
          LoginModal.onDidDismiss(() => {
            this._addMerchantCollections();
          });
        }
      }
    );
  }
}
