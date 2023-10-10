import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDialogComponent } from './home-dialog.component';

describe('HomeDialogComponent', () => {
  let component: HomeDialogComponent;
  let fixture: ComponentFixture<HomeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDialogComponent]
    });
    fixture = TestBed.createComponent(HomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
