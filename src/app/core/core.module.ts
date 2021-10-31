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
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    DividerComponent,
    ListItemComponent,
    DropDownMenuComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    HeroIconsModule.withIcons({
      star,
      starSolid,
      checkCircle,
      checkCircleSolid,
    }),
  ],
  exports: [
    DividerComponent,
    ListItemComponent,
    DropDownMenuComponent,
    CardComponent,
  ],
})
export class CoreModule {}
