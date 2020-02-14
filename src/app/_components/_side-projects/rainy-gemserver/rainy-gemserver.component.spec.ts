import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainyGemserverComponent } from './rainy-gemserver.component';

describe('RainyGemserverComponent', () => {
  let component: RainyGemserverComponent;
  let fixture: ComponentFixture<RainyGemserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainyGemserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainyGemserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
