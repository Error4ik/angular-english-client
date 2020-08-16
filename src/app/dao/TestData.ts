import {Category} from '../domain/Category';
import {Card} from '../domain/Card';

export class TestData {

  static categories: Category[] = [
    {id: '1', name: 'Существительные', numberOfCards: 3},
    {id: '2', name: 'Прилагательные', numberOfCards: 3},
    {id: '3', name: 'Неправильные глаголы', numberOfCards: 5},
    {id: '4', name: 'Правильные глаголы', numberOfCards: 1},
    {id: '5', name: 'Фразовые глаголы', numberOfCards: 2},
    {id: '6', name: 'Разговорные фразы', numberOfCards: 2}
  ];

  static cards: Card[] = [
    {
      id: '1',
      word: 'Lead-led-led',
      category: TestData.categories[5],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '2',
      word: 'Lead-led-led',
      category: TestData.categories[0],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '3',
      word: 'Lead-led-led',
      category: TestData.categories[0],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '4',
      word: 'Lead-led-led',
      category: TestData.categories[0],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '5',
      word: 'Lead-led-led',
      category: TestData.categories[2],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '6',
      word: 'Lead-led-led',
      category: TestData.categories[2],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '7',
      word: 'Lead-led-led',
      category: TestData.categories[1],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '8',
      word: 'Lead-led-led',
      category: TestData.categories[4],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '9',
      word: 'Lead-led-led',
      category: TestData.categories[5],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '10',
      word: 'Lead-led-led',
      category: TestData.categories[2],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '11',
      word: 'Lead-led-led',
      category: TestData.categories[2],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '12',
      word: 'Lead-led-led',
      category: TestData.categories[2],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '13',
      word: 'Lead-led-led',
      category: TestData.categories[4],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '14',
      word: 'Lead-led-led',
      category: TestData.categories[1],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '15',
      word: 'Lead-led-led',
      category: TestData.categories[3],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
    {
      id: '16',
      word: 'Lead-led-led',
      category: TestData.categories[1],
      transcription: '[lii] [law] [lge]',
      translation: 'Вести',
      phrase: 'Who led the party last election?',
      translatePhrase: 'Кто представлял партию на прошлых выборах?'
    },
  ];
}
