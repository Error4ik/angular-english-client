import {CardDao} from '../interface/CardDao';
import {Card} from '../../domain/Card';
import {Observable, of} from 'rxjs';
import {TestData} from '../TestData';
import {SearchParams} from '../search/SearchParams';

export class CardService implements CardDao {

  add(card: Card): Observable<Card> {
    card.id = this.getLastCardId().toString();
    TestData.cards.push(card);
    TestData.categories.filter(category => {
      if (category.id === card.category.id) {
        category.numberOfCards = category.numberOfCards + 1;
      }
    });
    return of(card);
  }

  delete(id: string): Observable<Card> {
    return undefined;
  }

  findAll(): Observable<Card[]> {
    return of(TestData.cards.sort());
  }

  get(id: string): Observable<Card> {
    return undefined;
  }

  update(item: Card): Observable<Card> {
    return undefined;
  }

  findCardsByCategory(searchParams: SearchParams): Observable<Card[]> {
    if (searchParams.category) {
      return of(TestData.cards.filter(card => card.category.id === searchParams.category));
    }
    return this.findAll();
  }

  private getLastCardId(): string {
    return Math.max.apply(Math, TestData.cards.map(card => card.id)) + 1;
  }
}
