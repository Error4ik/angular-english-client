import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {Category} from '../../domain/Category';
import {CategoryDAO} from '../interface/CategoryDao';
import {TestData} from '../TestData';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements CategoryDAO {

  constructor() {
  }

  add(category: Category): Observable<Category> {
    category.id = this.getLastIdCategory();
    TestData.categories.push(category);
    return of(category);
  }

  delete(id: string): Observable<Category> {
    const tmpCategory = TestData.categories.find(t => t.id === id);
    TestData.categories.splice(TestData.categories.indexOf(tmpCategory), 1);
    return of(tmpCategory);
  }

  get(id: string): Observable<Category> {
    return undefined;
  }

  findAll(): Observable<Category[]> {
    return of(TestData.categories.sort((c1, c2) => c1.title.localeCompare(c2.title)));
  }

  update(category: Category): Observable<Category> {
    const tmpCategory = TestData.categories.find(t => t.id === category.id);
    TestData.categories.splice(TestData.categories.indexOf(tmpCategory), 1, category);
    return of(tmpCategory);
  }

  private getLastIdCategory(): string {
    return Math.max.apply(Math, TestData.categories.map(category => category.id)) + 1;
  }
}
