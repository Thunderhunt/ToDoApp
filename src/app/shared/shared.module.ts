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
  documentAdd,
  documentAddSolid,
  dotsVertical,
  dotsVerticalSolid,
} from 'ng-heroicons';
import { SidebarService } from './sidebar/sidebar.service';
import { SidebarCollapsableItemComponent } from './sidebar/sidebar-collapsable-item/sidebar-collapsable-item.component';
import { SidebarGroupItemComponent } from './sidebar/sidebar-group-item/sidebar-group-item.component';
import { SidebarSearchBarComponent } from './sidebar/sidebar-search-bar/sidebar-search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarItemComponent,
    HeroComponent,
    SidebarCollapsableItemComponent,
    SidebarGroupItemComponent,
    SidebarSearchBarComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
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
      documentAdd,
      documentAddSolid,
      dotsVertical,
      dotsVerticalSolid,
    }),
  ],
  exports: [SidebarComponent],
  providers: [SidebarService],
})
export class SharedModule {}
