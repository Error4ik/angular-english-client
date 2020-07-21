import {Component, OnInit} from '@angular/core';

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
  categories: any[];

  constructor() {
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
    const cat = [
      {
        id: 1,
        title: 'First',
        completedCount: 5,
        uncompletedCount: 3
      },
      {
        id: 2,
        title: 'Second',
        completedCount: 1,
        uncompletedCount: 2
      },
      {
        id: 3,
        title: 'Third',
        completedCount: 9,
        uncompletedCount: 0
      },
      {
        id: 4,
        title: 'Fourth',
        completedCount: 4,
        uncompletedCount: 11
      },
      {
        id: 5,
        title: 'Fifth',
        completedCount: 1,
        uncompletedCount: 7
      },
      {
        id: 6,
        title: 'Sixth',
        completedCount: 7,
        uncompletedCount: 2
      },
    ];

    this.categories = cat;
  };
}
