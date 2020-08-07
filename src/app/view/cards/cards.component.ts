import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../domain/Card';
import {Category} from '../../domain/Category';
import {MatDialog} from '@angular/material/dialog';
import {CardDialogComponent} from '../../dialog/card-dialog/card-dialog.component';
import {DialogAction} from '../../dialog/DialogResult';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input()
  cards: Card[];
  @Input()
  selectedCategory: Category;
  @Input()
  categories: Category[];
  @Output()
  addCard = new EventEmitter<Card>();

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openAddCardDialog() {
    const c = new Card(null, '', this.selectedCategory, '', '', '', '');
    const dialogRef = this.dialog.open(CardDialogComponent, {
      data: {
        card: c,
        title: 'Add card',
        categories: this.categories
      },
      width: '400px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      } else if (result.action === DialogAction.SAVE) {
        this.addCard.emit(result.object);
      }
    });
  }
}
