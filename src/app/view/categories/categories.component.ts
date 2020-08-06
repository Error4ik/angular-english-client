import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../domain/Category';
import {MatDialog} from '@angular/material/dialog';
import {EditCategoryDialogComponent} from '../../dialog/edit-category-dialog/edit-category-dialog.component';
import {DialogAction} from '../../dialog/DialogResult';

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

  constructor(private dialog: MatDialog) {
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
    const newCat = new Category(null, '');
    newCat.numberOfWords = 0;
    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      data: {
        category: newCat,
        title: 'Create category'
      },
      width: '250px', autoFocus: false
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      if (result.action === DialogAction.SAVE) {
        this.addCategory.emit(result.object);
      }
    });
  }

  openEditCategoryDialog(editCat: Category) {
    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      data: {
        category: editCat,
        title: 'Edit category'
      },
      width: '300px', autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      } else if (result.action === DialogAction.SAVE) {
        this.updateCategory.emit(result.object);
      } else if (result.action === DialogAction.DELETE) {
        this.deleteCategory.emit(editCat);
      }
    });
  }
}
