import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export const fold = trigger('fold', [
  state('off', style({ transform: 'translateY(0)' })),
  state('on', style({ transform: 'translateY(-100%)' })),
  transition('on => off', [
    animate(400, keyframes([
      style({ opacity: 1, transform: 'translateY(-100%)', offset: 0 }),
      style({ opacity: 0, transform: 'translateY(0)', offset: 1.0 })
    ]))
  ]),
  transition('off => on', [
    animate(400, keyframes([
      style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
      style({ opacity: 1, transform: 'translateY(-100%)', offset: 1.0 })
    ]))
  ])
]);

export const fade = trigger('fade', [
  state('on', style({ opacity: '1', background: 'rgba(7,17,27,0.6)', display:'block' })),
  state('off', style({ opacity: '0', background: 'rgba(7,17,27,0)', display: 'none' })),
  transition('on => off', [
    animate(400, keyframes([
      style({ opacity: 1, background: 'rgba(7,17,27,0.6)', display:'block', offset: 0 }),
      style({ opacity: 0, background: 'rgba(7,17,27,0)', display: 'none', offset: 1.0 })
    ]))
  ]),
  transition('off => on', [
    animate(400, keyframes([
      style({ opacity: 0, background: 'rgba(7,17,27,0)', display: 'none', offset: 0 }),
      style({ opacity: 1, background: 'rgba(7,17,27,0.6)', display:'block', offset: 1.0 })
    ]))
  ])
]);

/*export const fold = trigger('fold', [
  state('in', style({ transform: 'translateY(-100%)' })),
  transition('void => *', [
    animate(400, keyframes([
      style({ transform: 'translateY(0)', offset: 0 }),
      style({ transform: 'translateY(-100%)', offset: 1.0 })
    ]))
  ]),
  transition('* => void', [
    animate(400, keyframes([
      style({ transform: 'translateY(-100%)', offset: 0 }),
      style({ transform: 'translateY(0)', offset: 1.0 })
    ]))
  ])
]);*/


