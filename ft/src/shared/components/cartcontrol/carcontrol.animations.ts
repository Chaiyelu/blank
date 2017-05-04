import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export const moveIn = trigger('moveIn', [
  state('in', style({ transition: 'all 0.4s linear' })),
  transition('void => *', [
    animate(400, keyframes([
      style({ opacity: 0, transform: 'translate3D(24px, 0, 0)', offset: 0 }),
      style({ opacity: 1, transform: 'translate3D(0, 0, 0)', offset: 1.0 })
    ]))
  ]),
  transition('* => void', [
    animate(400, keyframes([
      style({ opacity: 1, transform: 'translate3D(0, 0, 0)', offset: 0 }),
      style({ opacity: 0, transform: 'translate3D(24px, 0, 0)', offset: 1.0 })
    ]))
  ])
]);

export const roll = trigger('roll', [
  state('inactive', style({ transition: 'all 0.4s linear' })),
  state('active', style({ transition: 'all 0.4s linear' })),
  transition('active => inactive', [
    animate(400, keyframes([
      style({ transform: 'rotate(180)'}),
      style({ transform: 'rotate(0)'})
    ]))
  ]),
  transition('inactive => active', [
    animate(400, keyframes([
      style({ transform: 'rotate(0)'}),
      style({ transform: 'rotate(180)'})
    ]))
  ])
]);
