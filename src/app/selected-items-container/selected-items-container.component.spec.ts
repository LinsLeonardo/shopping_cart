import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedItemsContainerComponent } from './selected-items-container.component';

describe('SelectedItemsContainerComponent', () => {
  let component: SelectedItemsContainerComponent;
  let fixture: ComponentFixture<SelectedItemsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedItemsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
