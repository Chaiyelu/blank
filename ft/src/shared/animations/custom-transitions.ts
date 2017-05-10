import { Animation, PageTransition } from "ionic-angular";

/**
 * Animations for modals
 */
export class ModalSlideInFromRight extends PageTransition {
  init() {
    super.init();
    const ele: HTMLElement = this.enteringView.pageRef().nativeElement;
    const backdropEle = ele.querySelector('ion-backdrop');
    const backdrop = new Animation(this.plt, backdropEle);
    const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));

    wrapper.beforeStyles({ 'opacity': 1 });
    wrapper.fromTo('translateX', '100%', '0%');

    backdrop.fromTo('opacity', 0.01, 0.4);

    this
      .element(this.enteringView.pageRef())
      .easing('cubic-bezier(0.36,0.66,0.04,1)')
      .duration(400)
      .add(backdrop)
      .add(wrapper);
  }
}


export class ModalSlideOutToRight extends PageTransition {
  init() {
    super.init();
    const ele: HTMLElement = this.leavingView.pageRef().nativeElement;
    let backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
    let wrapperEle = <HTMLElement>ele.querySelector('.modal-wrapper');
    let wrapperEleRect = wrapperEle.getBoundingClientRect();
    let wrapper = new Animation(this.plt, wrapperEle);

    // height of the screen - top of the container tells us how much to scoot it down
    // so it's off-screen
    wrapper.fromTo('translateX', '0px', `${this.plt.width() - wrapperEleRect.left}px`);
    backdrop.fromTo('opacity', 0.4, 0.0);

    this
      .element(this.leavingView.pageRef())
      .easing('ease-out')
      .duration(250)
      .add(backdrop)
      .add(wrapper);
  }
}
