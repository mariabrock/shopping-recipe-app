import { ComponentFixture, TestBed } from '@angular/core/testing';

import { shopping-listComponent } from './shopping-list.component';

describe('shopping-listComponent', () => {
  let component: shopping-listComponent;
  let fixture: ComponentFixture<shopping-listComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ shopping-listComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(shopping-listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
