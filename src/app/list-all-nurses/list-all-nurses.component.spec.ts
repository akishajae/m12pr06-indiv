import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllNursesComponent } from './list-all-nurses.component';

describe('ListAllNursesComponent', () => {
  let component: ListAllNursesComponent;
  let fixture: ComponentFixture<ListAllNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAllNursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
