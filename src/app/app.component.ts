import {Component, OnInit} from '@angular/core';
import {Category} from './domain/Category';
import {CategoryService} from './dao/impl/category.service';
import {Card} from './domain/Card';
import {CardService} from './dao/impl/card.service';
import {SearchParams} from './dao/search/SearchParams';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedCategory = null;
  menuOpened: boolean;
  menuMode: string;
  menuPosition: string;
  showBackdrop: boolean;
  categories: Category[];
  cardsInCategory: number;
  totalCards: number;
  cards: Card[];
  searchParams = new SearchParams();

  constructor(private categoryService: CategoryService, private cardService: CardService) {
  }

  ngOnInit(): void {
    this.setMenuValue();
    this.updateCategories();
    this.updateCards(this.searchParams);
  }

  setMenuValue() {
    this.menuPosition = 'left';
    this.menuOpened = true;
    this.menuMode = 'push';
    this.showBackdrop = false;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  onClosedMenu() {
    this.menuOpened = false;
  }

  onSelectCategory(category: Category) {
    this.selectedCategory = category;
    this.searchParams.category = this.selectedCategory != null ? this.selectedCategory.id : null;
    this.updateCards(this.searchParams);
  }

  onAddCategory(category: Category) {
    this.categoryService.add(category).subscribe(() => {
      this.updateCategories();
    });
  }

  onUpdateCategory(category: Category) {
    this.categoryService.update(category).subscribe(() => {
      this.updateCategories();
    });
  }

  onDeleteCategory(category: Category) {
    this.categoryService.delete(category.id).subscribe(() => {
      if (category === this.selectedCategory) {
        this.selectedCategory = null;
        this.onSelectCategory(this.selectedCategory);
      }
      this.updateCategories();
    });
  }

  onAddCard(card: Card) {
    this.cardService.add(card).subscribe(() => {
      this.updateCards(this.searchParams);
    });
  }

  updateCategories() {
    this.categoryService.findAll().subscribe(categories => {
      this.cardsInCategory = 0;
      this.categories = categories;
      this.categories.forEach(cat => {
        if (this.selectedCategory && cat.id === this.selectedCategory.id) {
          this.selectedCategory = cat;
        }
        this.cardsInCategory += cat.numberOfCards;
      });
    });
  };

  updateCards(searchParams: SearchParams) {
    this.cardService.findCardsByCategory(searchParams).subscribe((page) => {
      this.cards = page.content;
      this.totalCards = page.totalElements;
    });
  }

  paging(pageEvent: PageEvent) {
    if (this.searchParams.pageLimit !== pageEvent.pageSize) {
      this.searchParams.pageNumber = 0;
    } else {
      this.searchParams.pageNumber = pageEvent.pageIndex;
    }

    this.searchParams.pageLimit = pageEvent.pageSize;
    this.searchParams.pageNumber = pageEvent.pageIndex;

    this.updateCards(this.searchParams);
  }
}
