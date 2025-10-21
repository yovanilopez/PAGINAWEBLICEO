import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VespertinaComponent } from './vespertina.component';

describe('VespertinaComponent', () => {
  let component: VespertinaComponent;
  let fixture: ComponentFixture<VespertinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VespertinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VespertinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
