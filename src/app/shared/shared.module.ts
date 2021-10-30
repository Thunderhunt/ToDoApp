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
  viewList,
  viewListSolid,
} from 'ng-heroicons';
import { SidebarService } from './sidebar/sidebar.service';
import { SidebarCollapsableItemComponent } from './sidebar/sidebar-collapsable-item/sidebar-collapsable-item.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarItemComponent,
    HeroComponent,
    SidebarCollapsableItemComponent,
  ],
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
      viewList,
      viewListSolid,
    }),
  ],
  exports: [SidebarComponent],
  providers: [SidebarService],
})
export class SharedModule {}
