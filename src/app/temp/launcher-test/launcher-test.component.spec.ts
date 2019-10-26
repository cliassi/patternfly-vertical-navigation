import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncherTestComponent } from './launcher-test.component';

describe('LauncherTestComponent', () => {
  let component: LauncherTestComponent;
  let fixture: ComponentFixture<LauncherTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LauncherTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LauncherTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
