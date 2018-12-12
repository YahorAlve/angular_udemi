import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstileComponent } from './ngstile.component';

describe('NgstileComponent', () => {
  let component: NgstileComponent;
  let fixture: ComponentFixture<NgstileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
