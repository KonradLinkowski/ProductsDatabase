import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/product/services/product/product.service';

export interface UploadImageDialogData {
  productId: string;
}

@Component({
  templateUrl: './upload-image.dialog.html',
  styleUrls: ['./upload-image.dialog.scss']
})
export class UploadImageDialog implements OnInit {
  form: FormGroup;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  isLoading = false;

  constructor(
    private storage: AngularFireStorage,
    private productService: ProductService,
    public dialogRef: MatDialogRef<UploadImageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UploadImageDialogData
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      thumbnail: new FormControl(null)
    });
  }

  startUpload() {
    this.isLoading = true;
    const path = `thumbnails/${this.data.productId}`;
    const ref = this.storage.ref(path);
    const file = this.form.value.thumbnail.files[0];
    this.task = this.storage.upload(path, file);
    this.percentage = this.task.percentageChanges();

    this.task.then(() => ref.getDownloadURL().toPromise()).then(downloadURL =>
      this.productService.updateProduct(this.data.productId, {
        thumbnail: {
          downloadURL,
          path
        }
      }).subscribe(() => {
        this.isLoading = false;
        this.dialogRef.close(true);
      })
    );
  }
}
