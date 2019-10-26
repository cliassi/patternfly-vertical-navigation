import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavTestComponent } from './vertical-nav-test.component';

describe('VerticalNavTestComponent', () => {
  let component: VerticalNavTestComponent;
  let fixture: ComponentFixture<VerticalNavTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalNavTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalNavTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
