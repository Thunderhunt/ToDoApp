import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  star,
  starSolid,
  checkCircle,
  checkCircleSolid,
  HeroIconsModule,
} from 'ng-heroicons';
import { DividerComponent } from './components/divider/divider.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [DividerComponent, ListItemComponent],
  imports: [
    CommonModule,
    HeroIconsModule.withIcons({
      star,
      starSolid,
      checkCircle,
      checkCircleSolid,
    }),
  ],
  exports: [DividerComponent, ListItemComponent],
})
export class CoreModule {}
