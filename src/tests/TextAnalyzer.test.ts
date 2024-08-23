import { text } from "stream/consumers";
import { TextAnalyzer } from "../TextAnalyzer";

const content = "uno due tre quattro cinque sei sette otto nove dieci";

let textAnalyzer: TextAnalyzer;
describe("Test the TextAnlyzer class", () => {
  beforeAll(() => {
    textAnalyzer = new TextAnalyzer("");
  });

  describe("Test the words counter", () => {
    test("the words should be 10", () => {
      textAnalyzer.content = content;
      const wordsCount = textAnalyzer.getWordsCount();
      expect(wordsCount).toBe(10);
    });
    test("the words should be 0 in empty string", () => {
      textAnalyzer.content = "";
      const wordsCount = textAnalyzer.getWordsCount();
      expect(wordsCount).toBe(0);
    });
    test("the words should be 2 in a multi line string", () => {
      textAnalyzer.content = "uno due\n tre quattro";
      const wordsCount = textAnalyzer.getWordsCount();
      expect(wordsCount).toBe(4);
    });
  });

  describe("Test the letters counter", () => {
    test("the letters should be 43", () => {
      textAnalyzer.content = content;
      const lettersCount = textAnalyzer.getLettersCount();
      expect(lettersCount).toBe(43);
    });
    test("the letters should be 0 in emptry string", () => {
      textAnalyzer.content = "";
      const lettersCount = textAnalyzer.getLettersCount();
      expect(lettersCount).toBe(0);
    });
  });

  describe("Test the spaces counter", () => {
    test("the letters should be 9", () => {
      textAnalyzer.content = content;
      const spacesCount = textAnalyzer.getSpacesCount();
      expect(spacesCount).toBe(9);
    });
    test("the spaces should be 0 in emptry string", () => {
      textAnalyzer.content = "";
      const spacesCount = textAnalyzer.getSpacesCount();
      expect(spacesCount).toBe(0);
    });
  });

  describe("Test the repeating words", () => {
    test("the repeating words should return an object with the number of repetitions", () => {
      textAnalyzer.content = "uno due due tre tre tre";
      const repeatingWords = textAnalyzer.getRepeatedWords();
      expect(repeatingWords).toMatchObject({ uno: 1, due: 2, tre: 3 });
    });
    test("the repeating words should return an empty object", () => {
      textAnalyzer.content = "";
      const repeatingWords = textAnalyzer.getRepeatedWords();
      expect(repeatingWords).toMatchObject({});
    });
  });

  describe("Test the frequent words", () => {
    test("should return an object with the most frequent words", () => {
      textAnalyzer.content = "uno due due tre tre tre";
      const frequentWords = textAnalyzer.getFrequentWords(2);
      expect(frequentWords).toMatchObject({ due: 2, tre: 3 });
    });
    test("should return an empty object", () => {
      textAnalyzer.content = "uno due due tre tre tre";
      const frequentWords = textAnalyzer.getFrequentWords(4);
      expect(frequentWords).toMatchObject({});
    });
  });
});
