export class Card {
  id: string;
  word: string;
  transcription: string;
  translation: string;
  phrase: string;
  translatePhrase: string;

  constructor(id: string, word: string, transcription: string, translation: string, phrase: string, translatePhrase: string) {
    this.id = id;
    this.word = word;
    this.transcription = transcription;
    this.translation = translation;
    this.phrase = phrase;
    this.translatePhrase = translatePhrase;
  }
}
