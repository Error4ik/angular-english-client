import {CardDao} from '../interface/cardDao';
import {Card} from '../../domain/Card';
import {Observable} from 'rxjs';
import {SearchParams} from '../search/SearchParams';
import {CommonService} from './common.service';
import {EnvironmentService} from '../../service/environment.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService extends CommonService<Card> implements CardDao {

  constructor(private environment: EnvironmentService, httpClient: HttpClient) {
    super(environment.getValue('card_url'), httpClient);
  }

  findCardsByCategory(searchParams: SearchParams): Observable<Card[]> {
    if (searchParams.category) {
      return this.httpClient.post<Card[]>(this.environment.getValue('card_url') + '/cards', searchParams);
    }
    return this.findAll();
  }

  findAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.environment.getValue('card_url') + '/cards');
  }
}
