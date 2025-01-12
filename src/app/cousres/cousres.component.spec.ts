import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CousresComponent } from './cousres.component';

describe('CousresComponent', () => {
  let component: CousresComponent;
  let fixture: ComponentFixture<CousresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CousresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CousresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
