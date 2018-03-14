import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerImgComponent } from './viewer-img.component';

describe('ViewerImgComponent', () => {
  let component: ViewerImgComponent;
  let fixture: ComponentFixture<ViewerImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
