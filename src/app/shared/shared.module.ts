import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { HeroComponent } from './hero/hero.component';
import { CoreModule } from '../core/core.module';
import {
  HeroIconsModule,
  star,
  sunSolid,
  sun,
  calendar,
  calendarSolid,
  user,
  userSolid,
  home,
  homeSolid,
} from 'ng-heroicons';

@NgModule({
  declarations: [SidebarComponent, SidebarItemComponent, HeroComponent],
  imports: [
    CommonModule,
    CoreModule,
    HeroIconsModule.withIcons({
      star,
      sun,
      sunSolid,
      calendar,
      calendarSolid,
      user,
      userSolid,
      home,
      homeSolid,
    }),
  ],
  exports: [SidebarComponent],
})
export class SharedModule {}
