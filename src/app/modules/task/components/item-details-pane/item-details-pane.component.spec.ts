import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsPaneComponent } from './item-details-pane.component';

describe('ItemDetailsPaneComponent', () => {
  let component: ItemDetailsPaneComponent;
  let fixture: ComponentFixture<ItemDetailsPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailsPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
