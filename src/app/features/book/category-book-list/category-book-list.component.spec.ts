import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBookListComponent } from './category-book-list.component';

describe('CategoryBookListComponent', () => {
  let component: CategoryBookListComponent;
  let fixture: ComponentFixture<CategoryBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryBookListComponent]
    });
    fixture = TestBed.createComponent(CategoryBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
