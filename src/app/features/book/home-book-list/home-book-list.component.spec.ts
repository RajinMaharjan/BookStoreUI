import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookListComponent } from './home-book-list.component';

describe('HomeBookListComponent', () => {
  let component: HomeBookListComponent;
  let fixture: ComponentFixture<HomeBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBookListComponent]
    });
    fixture = TestBed.createComponent(HomeBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
