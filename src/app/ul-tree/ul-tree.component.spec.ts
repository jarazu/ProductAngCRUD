import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlTreeComponent } from './ul-tree.component';

describe('UlTreeComponent', () => {
  let component: UlTreeComponent;
  let fixture: ComponentFixture<UlTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
