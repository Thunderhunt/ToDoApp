import {
  transition, trigger, useAnimation
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { transitionAnimation } from 'src/app/core/animations/swipe-right-insert-remove.animation';
import { ListItemModel } from '../sidebar-item.model';
@Component({
  selector: 'app-sidebar-collapsable-item',
  templateUrl: './sidebar-collapsable-item.component.html',
  styleUrls: ['./sidebar-collapsable-item.component.scss'],
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
      transition(':leave', [
        useAnimation(transitionAnimation, {
          params: {
            initialTransformState: 'translate(0px, 0px)',
            duration: '200ms',
            finalTransformState: 'translate(-350px, 0px)',
          },
        }),
      ]),
    ]),
  ],
})
export class SidebarCollapsableItemComponent implements OnInit {
  @Input() userGroup: ListItemModel = {
    id: 'uiui132uiui13ui13iu',
    color: 'green',
    shade: '500',
    icon: 'star',
    fillIcon: 'star-solid',
    text: 'Group 1',
    badge: '11',
    subItems: undefined,
  };

  isCollapsed: boolean = false;
  constructor() {
   
  }

  ngOnInit(): void {}
  collapseChange() {
    this.isCollapsed = !this.isCollapsed;
  }
}
