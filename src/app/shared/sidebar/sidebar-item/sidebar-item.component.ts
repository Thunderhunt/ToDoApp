import { transition, trigger, useAnimation } from '@angular/animations';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { HeroIconName } from 'ng-heroicons';
import { Subscription } from 'rxjs';
import { transitionAnimation } from 'src/app/core/animations/swipe-right-insert-remove.animation';
import { ListItemModel } from '../sidebar-item.model';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        useAnimation(transitionAnimation, {
          params: {
            initialTransformState: 'translate(-350px, 0px)',
            duration: '200ms',
            finalTransformState: 'translate(0px, 0px)',
          },
        }),
      ]),
    ]),
  ],
})
export class SidebarItemComponent implements OnInit, OnDestroy {
  @Input() selected: boolean = false;
  @Input() listItem: ListItemModel = {
    id: 'uiui1324sdfiui13ui2342u',
    color: '',
    shade: '',
    icon: 'star',
    fillIcon: 'star-solid',
    text: 'text',
    badge: '11',
    subItems: undefined,
  };
  subscription: Subscription;
  icon: HeroIconName = 'star';
  currentIconFill = false;
  hoverColor: string = '';
  iconColor: string = '';
  selectedColor: string = '';
  constructor(private sidebarService: SidebarService) {
    this.iconColor = 'text-' + this.listItem.color + '-' + this.listItem.shade;
    this.selectedColor = 'border-' + this.listItem.color + '-400';
    this.subscription = sidebarService.currentSelectedItem.subscribe((id) => {
      this.selected = id === this.listItem.id;
    });
  }

  toggleIconState() {
    if (this.currentIconFill) this.icon = this.listItem.icon;
    else this.icon = this.listItem.fillIcon;
    this.currentIconFill = !this.currentIconFill;
  }
  ngOnInit(): void {
    this.iconColor = 'text-' + this.listItem.color + '-' + this.listItem.shade;
    this.icon = this.listItem.icon;
  }
  selectChange() {
    this.sidebarService.changeSelectedIndex(this.listItem.id);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
