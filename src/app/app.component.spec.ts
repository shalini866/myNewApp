import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach( () => {
    fixture = new AppComponent();
  });

  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  });

  it(`should have as title 'myNewApp'`, () => {
    expect(fixture.title).toEqual('myNewApp');
  });
});
