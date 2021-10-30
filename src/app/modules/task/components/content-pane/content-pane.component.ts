import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-pane',
  templateUrl: './content-pane.component.html',
  styleUrls: ['./content-pane.component.scss'],
})
export class ContentPaneComponent implements OnInit {
  x: string[] = [
    '1',
    '2',
    '1',
    '2',
    '1',
    '2',
    '1',
    '2',
    '1',
    '2',
    '1',
    '2',
    '1',
    '2',
    '1',
    '2',
    '1',
    '2',
  ];
  constructor() {}

  ngOnInit(): void {}
}
