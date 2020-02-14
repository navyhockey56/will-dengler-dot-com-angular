import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwkwardMathComponent } from './awkward-math.component';

describe('AwkwardMathComponent', () => {
  let component: AwkwardMathComponent;
  let fixture: ComponentFixture<AwkwardMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwkwardMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwkwardMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
