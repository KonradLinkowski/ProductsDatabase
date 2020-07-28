import { NgModule } from '@angular/core';
import { ConfirmDialog } from './components/products-page/confirm.dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ConfirmDialog],
  imports: [MatDialogModule, MatButtonModule],
  entryComponents: [ConfirmDialog]
})
export class SharedModule { }
