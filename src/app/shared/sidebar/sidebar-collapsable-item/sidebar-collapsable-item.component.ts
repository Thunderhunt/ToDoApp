import { Component, Input, OnInit } from '@angular/core';
import { ListItemModel } from '../sidebar-item.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
  // ...
} from '@angular/animations';
import { transitionAnimation } from 'src/app/core/animations/swipe-right-insert-remove.animation';
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
    subItems: [
      {
        id: 'uiui132uiui1345433iu',
        color: 'yellow',
        shade: '500',
        icon: 'star',
        fillIcon: 'star-solid',
        text: 'List 1',
        badge: '11',
        subItems: undefined,
      },
      {
        id: 'uiui132uiu234ui13iu',
        color: 'yellow',
        shade: '500',
        icon: 'star',
        fillIcon: 'star-solid',
        text: 'List 1',
        badge: '11',
        subItems: undefined,
      },
      {
        id: 'uiui132uiui13ui23131u',
        color: 'yellow',
        shade: '500',
        icon: 'star',
        fillIcon: 'star-solid',
        text: 'List 1',
        badge: '11',
        subItems: undefined,
      },
    ],
  };

  isCollapsed: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  collapseChange() {
    this.isCollapsed = !this.isCollapsed;
  }
}
