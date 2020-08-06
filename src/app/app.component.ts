import {Component, OnInit} from '@angular/core';
import {Category} from './domain/Category';
import {CategoryService} from './dao/impl/CategoryService';
import {Card} from './domain/Card';
import {CardService} from './dao/impl/CardService';

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
  totalWords: number;
  cards: Card[];

  constructor(private categoryService: CategoryService, private cardService: CardService) {
  }

  ngOnInit(): void {
    this.setMenuValue();
    this.updateCategories();
    this.updateCards();
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
    this.updateCards();
  }

  onDeleteCategory(value: any) {
    console.log('onDeleteCategory', value);
  }

  onUpdateCategory(category: Category) {
    this.categoryService.update(category);
  }

  onAddCategory(value: any) {
    console.log('onAddCategory', value);
  }

  onSearchCategoryByTitle(value: string) {
    console.log('onSearchCategoryByTitle', value);
  }

  updateCategories() {
    this.categoryService.findAll().subscribe(categories => {
      this.totalWords = 0;
      this.categories = categories;
      this.categories.forEach(cat => {
        this.totalWords += cat.numberOfWords;
      });
    });
  };

  updateCards() {
    this.cardService.findCardByCategory(this.selectedCategory).subscribe(cards => this.cards = cards);
  }
}
