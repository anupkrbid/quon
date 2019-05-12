import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedPlatformsComponent } from './supported-platforms.component';

describe('SupportedPlatformsComponent', () => {
  let component: SupportedPlatformsComponent;
  let fixture: ComponentFixture<SupportedPlatformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportedPlatformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportedPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
