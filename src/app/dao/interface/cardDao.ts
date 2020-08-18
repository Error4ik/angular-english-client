import {CommonDao} from './commonDao';
import {Card} from '../../domain/Card';
import {SearchParams} from '../search/SearchParams';
import {Observable} from 'rxjs';

export interface CardDao extends CommonDao<Card>{

  findCardsByCategory(searchParams: SearchParams): Observable<Card[]>;
}
