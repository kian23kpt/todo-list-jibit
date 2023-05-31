import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMainPageComponent } from './panel-main-page.component';

describe('PanelMainPageComponent', () => {
  let component: PanelMainPageComponent;
  let fixture: ComponentFixture<PanelMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelMainPageComponent]
    });
    fixture = TestBed.createComponent(PanelMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
