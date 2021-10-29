import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './header/menu-item/menu-item.component';

@NgModule({
  declarations: [HeaderComponent, MenuItemComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
