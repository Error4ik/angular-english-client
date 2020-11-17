import {Category} from './Category';

export class Card {
  id: number;
  word: string;
  category: Category;
  translation: string;
  phrase: string;
  translatePhrase: string;

  constructor(
    id: number,
    word: string,
    category: Category,
    translation: string,
    phrase: string,
    translatePhrase: string
  ) {
    this.id = id;
    this.word = word;
    this.category = category;
    this.translation = translation;
    this.phrase = phrase;
    this.translatePhrase = translatePhrase;
  }
}
