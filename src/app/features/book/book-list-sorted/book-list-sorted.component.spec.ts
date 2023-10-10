import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListSortedComponent } from './book-list-sorted.component';

describe('BookListSortedComponent', () => {
  let component: BookListSortedComponent;
  let fixture: ComponentFixture<BookListSortedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListSortedComponent]
    });
    fixture = TestBed.createComponent(BookListSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
