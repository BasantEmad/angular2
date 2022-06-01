import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmbranchesComponent } from './atmbranches.component';

describe('AtmbranchesComponent', () => {
  let component: AtmbranchesComponent;
  let fixture: ComponentFixture<AtmbranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmbranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmbranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
