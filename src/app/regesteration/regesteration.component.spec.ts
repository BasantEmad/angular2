import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegesterationComponent } from './regesteration.component';

describe('RegesterationComponent', () => {
  let component: RegesterationComponent;
  let fixture: ComponentFixture<RegesterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegesterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegesterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
