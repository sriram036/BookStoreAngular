import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishbookComponent } from './wishbook.component';

describe('WishbookComponent', () => {
  let component: WishbookComponent;
  let fixture: ComponentFixture<WishbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
