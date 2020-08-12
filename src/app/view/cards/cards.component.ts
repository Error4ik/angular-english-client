import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../domain/Card';
import {Category} from '../../domain/Category';
import {MatDialog} from '@angular/material/dialog';
import {CardDialogComponent} from '../../dialog/card-dialog/card-dialog.component';
import {DialogAction} from '../../dialog/DialogResult';
import {PageEvent} from '@angular/material/paginator';
import {SearchParams} from '../../dao/search/SearchParams';

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
  @Input()
  pageNumber: number;
  @Input()
  totalCards: number;
  @Input()
  pageLimit: number;

  @Input('searchParams')
  private set setSearchParams(searchParams: SearchParams) {
    this.searchParams = searchParams;
  }

  @Output()
  addCard = new EventEmitter<Card>();
  @Output()
  private paging = new EventEmitter<PageEvent>();

  searchParams: SearchParams;

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

  pageChanged(pageEvent: PageEvent) {
    this.paging.emit(pageEvent);
  }
}
