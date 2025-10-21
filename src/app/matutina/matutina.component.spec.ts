import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatutinaComponent } from './matutina.component';

describe('MatutinaComponent', () => {
  let component: MatutinaComponent;
  let fixture: ComponentFixture<MatutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatutinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
