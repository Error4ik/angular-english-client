import {Component, Inject, OnInit} from '@angular/core';
import {Category} from '../../domain/Category';
import {Card} from '../../domain/Card';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogAction, DialogResult} from '../DialogResult';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {
  dialogTitle: string;
  tmpCategory: Category;
  categories: Category[];
  card: Card;

  word: string;
  translation: string;
  phrase: string;
  translatePhrase: string;

  constructor(
    private dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { card: Card, title: string, categories: Category[] }) {
  }

  ngOnInit(): void {
    this.card = this.data.card;
    this.dialogTitle = this.data.title;
    this.categories = this.data.categories;
    this.tmpCategory = this.card.category;
    this.word = this.card.word;
    this.translation = this.card.translation;
    this.phrase = this.card.phrase;
    this.translatePhrase = this.card.translatePhrase;
  }

  onConfirm() {
    this.card.word = this.word;
    this.card.category = this.tmpCategory;
    this.card.translation = this.translation;
    this.card.phrase = this.phrase;
    this.card.translatePhrase = this.translatePhrase;
    this.dialogRef.close(new DialogResult(DialogAction.SAVE, this.card));
  }

  onCancel() {
    this.dialogRef.close(new DialogResult(DialogAction.CANCEL));
  }

  compareObjects(o1: any, o2: any): boolean {
    if (o1 != null && o2 != null) {
      return o1.id === o2.id;
    }
    return false;
  }
}
