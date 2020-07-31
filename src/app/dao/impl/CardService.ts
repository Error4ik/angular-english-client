import {CardDao} from '../interface/CardDao';
import {Card} from '../../domain/Card';
import {Observable, of} from 'rxjs';
import {TestData} from '../TestData';

export class CardService implements CardDao {

  add(item: Card): Observable<Card> {
    return undefined;
  }

  delete(id: string): Observable<Card> {
    return undefined;
  }

  findAll(): Observable<Card[]> {
    return of(TestData.cards.sort((c1, c2) => c1.id.localeCompare(c2.id)));
  }

  get(id: string): Observable<Card> {
    return undefined;
  }

  update(item: Card): Observable<Card> {
    return undefined;
  }

}
