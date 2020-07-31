import {Category} from '../domain/Category';
import {Card} from '../domain/Card';

export class TestData {

  static categories: Category[] = [
    {id: '1', title: 'Существительные', numberOfWords: 5},
    {id: '2', title: 'Прилагательные', numberOfWords: 3},
    {id: '3', title: 'Неправильные глаголы', numberOfWords: 1},
    {id: '4', title: 'Правильные глаголы', numberOfWords: 6},
    {id: '5', title: 'Фразовые глаголы', numberOfWords: 9},
    {id: '6', title: 'Разговорные фразы', numberOfWords: 14}
  ];

  static cards: Card[] = [
    {
      id: '1',
      word: 'Lead-led-led',
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '2',
      word: 'Lead-led-led',
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '3',
      word: 'Lead-led-led',
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '4',
      word: 'Lead-led-led',
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    }
  ];
}
