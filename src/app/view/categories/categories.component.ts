import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input()
  categories: any[];
  @Input()
  selectedCategory: any;
  @Input()
  uncompletedTotal: number;
  @Output()
  selectCategory = new EventEmitter<any>();
  @Output()
  deleteCategory = new EventEmitter<any>();
  @Output()
  updateCategory = new EventEmitter<any>();
  @Output()
  addCategory = new EventEmitter<any>();
  @Output()
  searchCategory = new EventEmitter<string>();

  indexMouseMove: number;

  constructor() {
  }

  ngOnInit() {
  }

  showTasksByCategory(category: any) {
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

  openEditCategoryDialog(category: any) {
    console.log('openEditCategoryDialog');
  }
}
