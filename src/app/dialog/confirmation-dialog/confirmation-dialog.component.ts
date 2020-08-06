import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogAction, DialogResult} from '../DialogResult';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  dialogTitle: string;
  message: string;

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { dialogTitle: string, message: string }) {
  }

  ngOnInit() {
    this.dialogTitle = this.data.dialogTitle;
    this.message = this.data.message;
  }

  onConfirm(): void {
    this.dialogRef.close(new DialogResult(DialogAction.OK));
  }

  onCancel(): void {
    this.dialogRef.close(new DialogResult(DialogAction.CANCEL));
  }
}
