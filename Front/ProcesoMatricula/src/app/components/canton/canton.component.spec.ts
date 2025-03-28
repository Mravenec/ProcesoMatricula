import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantonesComponent } from './canton.component';
describe('CantonComponent', () => {
  let component: CantonesComponent;
  let fixture: ComponentFixture<CantonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CantonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
