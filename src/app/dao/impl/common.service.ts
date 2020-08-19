import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class CommonService<T> {

  private readonly url: string;

  constructor(url: string, protected httpClient: HttpClient) {
    this.url = url;
  }

  add(item: T): Observable<T> {
    return this.httpClient.post<T>(this.url + '/add', item);
  }

  delete(id: number): Observable<T> {
    return this.httpClient.delete<T>(this.url + '/delete/' + id);
  }

  get(id: number): Observable<T> {
    return this.httpClient.get<T>(this.url + '/id/' + id);
  }

  update(value: T): Observable<T> {
    return this.httpClient.post<T>(this.url + '/update', value);
  }
}
