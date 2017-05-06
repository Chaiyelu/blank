import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { NavParams, Content, ViewController } from 'ionic-angular';
import { FoodSellerDetailService } from '../foodsellerdetail.service';
import { GoodModel } from "../../../../shared/models/good.model";

@Component({
  selector: 'sellergoods',
  templateUrl: 'sellergoods.component.html'
})

export class SellergoodsComponent implements OnInit,AfterViewInit,AfterViewChecked {
  @ViewChild('menuwrapper') menuWrapper: Content;
  @ViewChild('foodswrapper') foodsWrapper: Content;
  @ViewChild('shopcart') shopcart: ElementRef;
  sellergoods: GoodModel[] = [];
  listHeight: number[] = [];
  currentIndex: number = 0;
  scrollTop: number = 0;
  afterDataLoad: boolean = false;
  choosedFoods: any[] = [];


  constructor(
    private foodSellerDetailService: FoodSellerDetailService,
    public navParams: NavParams,
    private elementRef: ElementRef,
    public viewCtrl: ViewController
  ) {
    this.sellergoods = [];
  }

  ngOnInit() {
    let id = this.navParams.get('id');
    this.foodSellerDetailService.getGoodsList(id).subscribe((res) => {
      this.sellergoods = res;
      this.afterDataLoad = true;
    });
  }

  ngAfterViewInit() {
    console.log(this.shopcart.nativeElement);
  }

  ngAfterViewChecked() {
    if (this.afterDataLoad) {
      this._calculateHeight();
    }
    this.afterDataLoad = false;
    this._currentIndex();
  }

  // ionViewDidEnter() {
  //   this._calculateHeight();
  // }

  onSelectMenu(index: number, $event: any) {
    let foodLists = this.foodsWrapper._elementRef.nativeElement.getElementsByClassName('food-list-hook');
    let hg = foodLists[index].offsetTop;
    this.foodsWrapper.scrollTo(0, hg, 300).then(()=>this._currentIndex());
  }

  _calculateHeight() {
    let foodLists = this.foodsWrapper._elementRef.nativeElement.getElementsByClassName('food-list-hook');
    let height = 0;
    this.listHeight.push(height);
    for (let i = 0; i < foodLists.length; i++) {
      let item = foodLists[i];
      height += item.clientHeight;
      this.listHeight.push(height);
    }
    console.log(this.listHeight);
  }

  onFoodsScroll() {
    this.scrollTop = Math.abs(Math.round(this.foodsWrapper.scrollTop));
  }

  _currentIndex() {
    for (let i = 0; i < this.listHeight.length; i++) {
      let height1 = this.listHeight[i];
      let height2 = this.listHeight[i + 1];
      if ((this.scrollTop >= height1 && this.scrollTop < height2)) {
        return i;
      }
    }
    return 0;
  }

  chooseFoods(){
    let foods:any[] = [];
    this.sellergoods.forEach((good) => {
      good.foods.forEach((food) => {
        if (food.count) {
          foods.push(food);
        }
      })
    });
    this.choosedFoods = foods;
    console.log(this.choosedFoods);
  }
}
