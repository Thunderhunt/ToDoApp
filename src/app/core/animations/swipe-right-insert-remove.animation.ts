import { animation, style, animate } from '@angular/animations';

export const transitionAnimation = animation([
  style({ transform: '{{initialTransformState}}' }),
  animate('{{duration}}', style({ transform: '{{finalTransformState}}' })),
]);
