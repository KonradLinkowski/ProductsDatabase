import { NgModule } from '@angular/core';
import { ConfirmDialog } from './components/confirm/confirm.dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UploadImageDialog } from './components/upload-image/upload-image.dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule } from '@angular/material';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ConfirmDialog, UploadImageDialog],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MaterialFileInputModule,
    MatIconModule
  ],
  entryComponents: [ConfirmDialog, UploadImageDialog]
})
export class SharedModule { }
