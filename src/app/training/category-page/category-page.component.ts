import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  categories = [
    {
      id: 1,
      name: 'first',
      count: 55
    }, {
      id: 2,
      name: 'second',
      count: 33
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
