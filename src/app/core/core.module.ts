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
import { DropDownMenuComponent } from './components/drop-down-menu/drop-down-menu.component';

@NgModule({
  declarations: [DividerComponent, ListItemComponent, DropDownMenuComponent],
  imports: [
    CommonModule,
    HeroIconsModule.withIcons({
      star,
      starSolid,
      checkCircle,
      checkCircleSolid,
    }),
  ],
  exports: [DividerComponent, ListItemComponent, DropDownMenuComponent],
})
export class CoreModule {}
