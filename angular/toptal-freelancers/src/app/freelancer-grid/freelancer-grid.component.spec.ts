import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerGridComponent } from './freelancer-grid.component';

describe('FreelancerGridComponent', () => {
  let component: FreelancerGridComponent;
  let fixture: ComponentFixture<FreelancerGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
