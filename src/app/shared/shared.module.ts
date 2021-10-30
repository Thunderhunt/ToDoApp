import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { HeroComponent } from './hero/hero.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [SidebarComponent, SidebarItemComponent, HeroComponent],
  imports: [CommonModule, CoreModule],
  exports: [SidebarComponent],
})
export class SharedModule {}
