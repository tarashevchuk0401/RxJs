import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrotleComponent } from './throtle.component';

describe('ThrotleComponent', () => {
  let component: ThrotleComponent;
  let fixture: ComponentFixture<ThrotleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrotleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThrotleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
