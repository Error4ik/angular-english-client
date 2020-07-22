import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../domain/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input()
  categories: Category[];
  @Input()
  selectedCategory: Category;
  @Input()
  totalWords: number;
  @Output()
  selectCategory = new EventEmitter<Category>();
  @Output()
  deleteCategory = new EventEmitter<Category>();
  @Output()
  updateCategory = new EventEmitter<Category>();
  @Output()
  addCategory = new EventEmitter<Category>();
  @Output()
  searchCategory = new EventEmitter<string>();

  indexMouseMove: number;

  constructor() {
  }

  ngOnInit() {
  }

  showTasksByCategory(category: Category) {
    if (this.selectedCategory === category) {
      return;
    }

    this.selectedCategory = category;
    this.selectCategory.emit(this.selectedCategory);
  }

  showEditIcon(index: number) {
    this.indexMouseMove = index;
  }

  openAddCategoryDialog() {
    console.log('addCategoryDialog');
  }

  openEditCategoryDialog(category: Category) {
    console.log('openEditCategoryDialog');
  }
}
