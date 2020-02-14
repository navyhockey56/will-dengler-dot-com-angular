import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTexterComponent } from './side-texter.component';

describe('SideTexterComponent', () => {
  let component: SideTexterComponent;
  let fixture: ComponentFixture<SideTexterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTexterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTexterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
