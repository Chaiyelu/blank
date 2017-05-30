import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { NavParams, Content, ViewController, ModalController, Config } from 'ionic-angular';
import { FoodSellerDetailService } from '../foodsellerdetail.service';
import { GoodModel } from "../../../../shared/models/good.model";
import { FooddetailComponent } from '../fooddetail/fooddetail.component';
import { ModalSlideInFromRight, ModalSlideOutToRight } from "../../../../shared/animations/custom-transitions";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sellergoods',
  templateUrl: 'sellergoods.component.html'
})

export class SellergoodsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('menuwrapper') menuWrapper: Content;
  @ViewChild('foodswrapper') foodsWrapper: Content;
  sellergoods: GoodModel[] = [];
  listHeight: number[] = [];
  currentIndex: number = 0;
  scrollTop: number = 0;
  afterDataLoad: boolean = false;
  // choosedFoods: any[] = [];
  choosedFoods: Observable<any>;

  constructor(
    public foodSellerDetailService: FoodSellerDetailService,
    public navParams: NavParams,
    public elementRef: ElementRef,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    config: Config,
    private store$: Store<any>
  ) {
    this.foodSellerDetailService.doChoose.subscribe(() => {
      this.chooseFoods();
    });
    this.sellergoods = [];
    config.setTransition('modal-slide-in-from-right', ModalSlideInFromRight);
    config.setTransition('modal-slide-out-to-right', ModalSlideOutToRight);
    this.choosedFoods = this.store$.select('choosedFoods');
  }

  ngOnInit() {
    let id = this.navParams.get('id');
    this.foodSellerDetailService.getGoodsList(id).subscribe((res) => {
      this.sellergoods = res;
      this.afterDataLoad = true;
    });
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {
    if (this.afterDataLoad) {
      this._calculateHeight();
      this.afterDataLoad = false;
    }
    this._currentIndex();
  }

  // ionViewDidEnter() {
  //   this._calculateHeight();
  // }

  onBrowseFood(food: object) {
    console.log(food);

    let foodDetailModal = this.modalCtrl.create(FooddetailComponent,
      // { food: food, choosedFoods: this.choosedFoods, sellergoods: this.sellergoods },
      { food: food, sellergoods: this.sellergoods },
      { enterAnimation: 'modal-slide-in-from-right', leaveAnimation: 'modal-slide-out-to-right' }
    );
    foodDetailModal.present().then(() => {
      //this.foodSellerDetailService.doChoose1.emit(this.choosedFoods);
    });
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

  onSelectMenu(index: number, $event: any) {
    let self = this;
    let foodLists = this.foodsWrapper._elementRef.nativeElement.getElementsByClassName('food-list-hook');
    let hg = foodLists[index].offsetTop;
    this.foodsWrapper.scrollTo(0, hg, 300).then(() => self._currentIndex());
  }


  onFoodsScroll($event) {
    this.scrollTop = Math.abs(Math.round(this.foodsWrapper.scrollTop));
  }

  chooseFoods() {
    let foods: any[] = [];
    this.sellergoods.forEach((good) => {
      good.foods.forEach((food) => {
        if (food.count) {
          foods.push(food);
        }
      })
    });
    this.store$.dispatch({type: 'UPDATE', payload:foods});
    // this.foodSellerDetailService.doChoose1.emit(foods);
    console.log(this.choosedFoods);
  }
}
