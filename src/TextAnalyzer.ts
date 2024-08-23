import * as path from "path";
import * as fs from "fs";
import axios from "axios";

type WordsMap = { [key: string]: number };

export class TextAnalyzer {
  private _content: string;

  constructor(content: string) {
    this._content = content;
  }

  get content(): string {
    return this._content;
  }

  set content(content: string) {
    this._content = content;
  }

  getWordsCount(): number {
    const words = this.content.match(/\b\S+\b/g);
    return words ? words.length : 0;
  }

  getLettersCount(): number {
    return this.content.match(/[a-zA-Z]/g)?.length || 0;
  }

  getSpacesCount(): number {
    return this.content.match(/\s/g)?.length || 0;
  }

  getRepeatedWords(): WordsMap {
    const words = this.content.match(/\b\S+\b/g);
    if (words) {
      const wordsMap: WordsMap = words.reduce((acc: WordsMap, word) => {
        acc[word] = acc[word] ? acc[word] + 1 : 1;
        return acc;
      }, {});
      return wordsMap;
    }
    return {};
  }

  getFrequentWords(threshold: number): any {
    const words = this.getRepeatedWords();
    return Object.keys(words).reduce((acc: WordsMap, word) => {
      if (words[word] >= threshold) return { ...acc, [word]: words[word] };
      else return acc;
    }, {});
  }

  showWords(words: WordsMap): string {
    const list = Object.keys(words).map((word) => `${word} (${words[word]})`);
    return list.join(", ");
  }
}
