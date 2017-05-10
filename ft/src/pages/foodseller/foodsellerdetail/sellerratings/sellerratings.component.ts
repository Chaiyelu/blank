import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { NavParams } from "ionic-angular";
import { FoodSellerDetailService } from "../foodsellerdetail.service";
import { RatingModel, RatingQueryParams } from "../../../../shared/models/rating.model";

const ALL = 2;
@Component({
	selector: 'sellerratings',
	templateUrl: 'sellerratings.component.html'
})

export class SellerratingsComponent implements OnInit, OnChanges, AfterViewChecked{

  private seller: object;
  private ratings: RatingModel[];
  private selectType: number;
  private onlyContent: boolean = false;
  private desc: object;
  private scroll: any;
  private allowInitScroll:boolean = false;
  private queryParams: RatingQueryParams = <RatingQueryParams>{};

  constructor(
    public foodSellerDetailService:FoodSellerDetailService,
    public navParams:NavParams
  ){
    this.seller = {};
    this.ratings = [];
    // this.queryParams = {
    //   sellerId :'',
    //   rateType : 1
    // }
  }

  ngOnChanges(){

  }

  ngOnInit(){
    this.selectType = ALL;
    this.onlyContent = false;
    this.desc = { all: '全部', positive: '满意', negative: '不满意' };
    this.queryParams['sellerId'] = this.navParams.get('id');
    this.foodSellerDetailService.getRatings(this.queryParams).subscribe(
      ratings => {
        this.ratings = ratings;
        console.log(this.ratings);
      },
      error => console.log(error)
    );

  }

  ngAfterViewChecked() {

  }

  needShow(type?: number, text?:string){
    if (this.onlyContent && !text) {
      return false;
    }
    if (this.selectType == ALL) {
      return true;
    } else {
      return this.selectType == type;
    }
  }

  onToggleContent(onlyCon:boolean){
    console.log(onlyCon);
    this.onlyContent = onlyCon;
  }

  onSelectType(type: number) {
    this.selectType = type;
    console.log(type);
    //this.allowInitScroll = true;
  }
}
