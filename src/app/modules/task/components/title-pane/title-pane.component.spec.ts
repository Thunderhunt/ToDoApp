import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePaneComponent } from './title-pane.component';

describe('TitlePaneComponent', () => {
  let component: TitlePaneComponent;
  let fixture: ComponentFixture<TitlePaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
