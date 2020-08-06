import {Component, Inject, OnInit} from '@angular/core';
import {Category} from '../../domain/Category';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogAction, DialogResult} from '../DialogResult';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.scss']
})
export class EditCategoryDialogComponent implements OnInit {

  dialogTitle = '';
  category: Category;
  tmpTitle: string;
  canDelete = false;

  constructor(
    private dialogRef: MatDialogRef<EditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [Category, string]) {
  }

  ngOnInit(): void {
    this.category = this.data[0];
    this.dialogTitle = this.data[1];
    this.tmpTitle = this.category.title;
    if (this.category.id) {
      this.canDelete = true;
    }
  }

  onConfirm(): void {
    console.log(this.category);
    this.category.title = this.tmpTitle;
    console.log(this.category);
    this.dialogRef.close(new DialogResult(DialogAction.EDIT, this.category));
  }

  onCancel(): void {
    this.dialogRef.close(new DialogResult(DialogAction.CANCEL));
  }

  isCanShow() {
    return this.canDelete;
  }

  onDelete() {
    console.log('Delete Category! in category dialog component.');
  }
}
