import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferwhenComponent } from './bufferwhen.component';

describe('BufferwhenComponent', () => {
  let component: BufferwhenComponent;
  let fixture: ComponentFixture<BufferwhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferwhenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferwhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
