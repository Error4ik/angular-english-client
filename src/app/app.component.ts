import {Component, OnInit} from '@angular/core';
import {Category} from './domain/Category';
import {CategoryService} from './dao/impl/CategoryService';

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

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.setMenuValue();
    this.updateCategories();
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

  onSelectCategory(value: any) {
    console.log('onSelectCategory', value);
  }

  onDeleteCategory(value: any) {
    console.log('onDeleteCategory', value);
  }

  onUpdateCategory(value: any) {
    console.log('onUpdateCategory', value);
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
}
