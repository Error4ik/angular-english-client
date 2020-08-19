import {Observable} from 'rxjs';

export interface CommonDao<T> {
  add(item: T): Observable<T>;

  get(id: number): Observable<T>;

  delete(id: number): Observable<T>;

  update(item: T): Observable<T>;

  findAll(): Observable<T[]>;
}
