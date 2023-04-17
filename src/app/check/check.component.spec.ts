import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckComponent } from './check.component';

describe('CheckComponent', () => {
  let component: CheckComponent;
  let fixture: ComponentFixture<CheckComponent>;

  beforeEach(async () => {
    component= new CheckComponent();
  });

  it('should increment the count variable when the button is clicked ', () => {
    expect(component.count).toBe(0);
    component.handleClick();
    expect(component.count).toBe(1);
  });
});
