import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnoreElementComponent } from './ignore-element.component';

describe('IgnoreElementComponent', () => {
  let component: IgnoreElementComponent;
  let fixture: ComponentFixture<IgnoreElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgnoreElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgnoreElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
