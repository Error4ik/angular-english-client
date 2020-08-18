import {Observable} from 'rxjs';

export interface CommonDao<T> {
  add(item: T): Observable<T>;

  get(id: string): Observable<T>;

  delete(id: string): Observable<T>;

  update(item: T): Observable<T>;

  findAll(): Observable<T[]>;
}
