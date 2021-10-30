import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPaneComponent } from './components/content-pane/content-pane.component';
import { annotation, HeroIconsModule } from 'ng-heroicons';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ContentPaneComponent],
  imports: [
    CommonModule,
    HeroIconsModule.withIcons({ annotation }),
    CoreModule,
  ],
  exports: [ContentPaneComponent],
})
export class TaskModule {}
