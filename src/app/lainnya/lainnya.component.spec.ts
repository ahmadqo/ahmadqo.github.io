import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LainnyaComponent } from './lainnya.component';

describe('LainnyaComponent', () => {
  let component: LainnyaComponent;
  let fixture: ComponentFixture<LainnyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LainnyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LainnyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
