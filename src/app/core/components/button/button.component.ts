import { Component, Input, OnInit } from '@angular/core';
import { HeroIconName } from 'ng-heroicons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() icon: HeroIconName = 'sun';
  constructor() {}

  ngOnInit(): void {}
}
