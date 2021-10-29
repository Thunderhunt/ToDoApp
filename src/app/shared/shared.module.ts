import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './header/menu-item/menu-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HeaderComponent, MenuItemComponent, SidebarComponent, SidebarItemComponent, HeroComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class SharedModule {}
