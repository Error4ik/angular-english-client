import {Component, Inject, OnInit} from '@angular/core';
import {Category} from '../../domain/Category';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogAction, DialogResult} from '../DialogResult';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {

  dialogTitle = '';
  category: Category;
  tmpTitle: string;
  canDelete = false;

  constructor(
    private dialogRef: MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { category: Category, title: string },
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.category = this.data.category;
    this.dialogTitle = this.data.title;
    this.tmpTitle = this.category.name;
    if (this.category.id) {
      this.canDelete = true;
    }
  }

  onConfirm(): void {
    this.category.name = this.tmpTitle;
    this.dialogRef.close(new DialogResult(DialogAction.SAVE, this.category));
  }

  onCancel(): void {
    this.dialogRef.close(new DialogResult(DialogAction.CANCEL));
  }

  isCanShow() {
    return this.canDelete;
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        dialogTitle: 'Confirm the action.',
        message: `Are you sure that you want to delete an category? ${this.category.name}`
      },
      maxWidth: '300px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      } else if (result.action === DialogAction.OK) {
        this.dialogRef.close(new DialogResult(DialogAction.DELETE));
      }
    });
  }
}
