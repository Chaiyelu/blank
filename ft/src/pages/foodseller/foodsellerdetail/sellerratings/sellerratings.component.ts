import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { NavParams } from "ionic-angular";
import { FoodSellerDetailService } from "../foodsellerdetail.service";
import { RatingModel, RatingQueryParams } from "../../../../shared/models/rating.model";

const ALL = 2;
@Component({
  selector: 'sellerratings',
  templateUrl: 'sellerratings.component.html'
})

export class SellerratingsComponent implements OnInit, OnChanges, AfterViewChecked {

  private seller: object;
  private ratings: Array<RatingModel>;
  private selectType: number;
  private onlyContent: boolean = false;
  private desc: object;
  private queryParams: RatingQueryParams = <RatingQueryParams>{};
  hasMore : boolean = true;

  constructor(
    public foodSellerDetailService: FoodSellerDetailService,
    public navParams: NavParams
  ) {
    this.ratings = [];
    this.selectType = 0;
    this.queryParams.page = 1;
    this.queryParams.offset = 5;
  }


  ngOnChanges() {

  }

  ngOnInit() {
    this.selectType = ALL;
    this.onlyContent = false;
    this.desc = { all: '全部', positive: '满意', negative: '不满意' };
    this.seller = this.navParams.data;

    this.queryParams.sellerId = this.navParams.get('id');
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

  needShow(type?: number, text?: string) {
    if (this.onlyContent && !text) {
      return false;
    }
    if (this.selectType == ALL) {
      return true;
    } else {
      return this.selectType == type;
    }
  }

  onToggleContent(onlyCon: boolean) {
    console.log(onlyCon);
    this.onlyContent = onlyCon;
  }

  onSelectType(type: number) {
    this.selectType = type;
    console.log(type);
    //this.allowInitScroll = true;
  }

  doLoadMore($event) {
    this.queryParams.page = this.queryParams.page + 1;
    console.log(this.queryParams);
    this.foodSellerDetailService.getRatings(this.queryParams).subscribe(
      ratings => {
        if (ratings.length != 0){
          this.ratings = this.ratings.concat(ratings);
          $event.complete();
        }else {
          this.hasMore = false;
        }
        console.log(this.ratings);
      },
      error => console.log(error)
    );
  }

  doFilter() {

  }
}
