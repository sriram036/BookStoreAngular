import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartdataComponent } from './cartdata.component';

describe('CartdataComponent', () => {
  let component: CartdataComponent;
  let fixture: ComponentFixture<CartdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
