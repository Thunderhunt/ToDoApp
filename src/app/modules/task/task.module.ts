import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPaneComponent } from './components/content-pane/content-pane.component';
import { annotation, HeroIconsModule } from 'ng-heroicons';
import { CoreModule } from 'src/app/core/core.module';
import { ItemDetailsPaneComponent } from './components/item-details-pane/item-details-pane.component';
import { TitlePaneComponent } from './components/title-pane/title-pane.component';

@NgModule({
  declarations: [
    ContentPaneComponent,
    ItemDetailsPaneComponent,
    TitlePaneComponent,
  ],
  imports: [
    CommonModule,
    HeroIconsModule.withIcons({ annotation }),
    CoreModule,
  ],
  exports: [ContentPaneComponent, ItemDetailsPaneComponent, TitlePaneComponent],
})
export class TaskModule {}
