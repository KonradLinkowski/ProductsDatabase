import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageDialog } from './upload-image.dialog';

describe('UploadImageDialog', () => {
  let component: UploadImageDialog;
  let fixture: ComponentFixture<UploadImageDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImageDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
