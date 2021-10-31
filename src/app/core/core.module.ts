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
import { ButtonComponent } from './components/button/button.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { LabelComponent } from './components/label/label.component';

@NgModule({
  declarations: [
    DividerComponent,
    ListItemComponent,
    DropDownMenuComponent,
    CardComponent,
    ButtonComponent,
    TextFieldComponent,
    TextAreaComponent,
    LabelComponent,
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
    ButtonComponent,
    TextFieldComponent,
    TextAreaComponent,
    LabelComponent,
  ],
})
export class CoreModule {}
