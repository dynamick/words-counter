import { TextAnalyzer } from "./TextAnalyzer";
import { ContentReader } from "./ContentReader";
const MIN_REPEATED_WORDS = 3;

async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error("Please provide a file path or URL as an argument");
    process.exit();
  }

  try {
    const reader = ContentReader.getInstance();
    const content = await reader.fetch(filePath);

    const analyzer = new TextAnalyzer(content);
    console.log(`The file has ${analyzer.getWordsCount()} words`);
    console.log(`The file has ${analyzer.getLettersCount()} letters`);
    console.log(`The file has ${analyzer.getSpacesCount()} spaces`);
    const frequentWords = analyzer.getFrequentWords(MIN_REPEATED_WORDS);
    console.log(
      `The most frequent words are: ${analyzer.showWords(frequentWords)}`
    );
  } catch (error) {
    let message = "unknown error";
    if (error instanceof Error) {
      message = error.message;
    }
    console.log("Error: ", message);
    process.exit();
  }
}

main();
