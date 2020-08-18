import {Injectable} from '@angular/core';
import {Category} from '../../domain/Category';
import {CategoryDao} from '../interface/categoryDao';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {EnvironmentService} from '../../service/environment.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CommonService<Category> implements CategoryDao {

  constructor(private environment: EnvironmentService, httpClient: HttpClient) {
    super(environment.getValue('category_url'), httpClient);
  }

  findAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.environment.getValue('category_url') + '/categories');
  }
}
