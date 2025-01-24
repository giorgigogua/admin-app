import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAllComponent } from './browse-all.component';

describe('BrowseAllComponent', () => {
  let component: BrowseAllComponent;
  let fixture: ComponentFixture<BrowseAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
