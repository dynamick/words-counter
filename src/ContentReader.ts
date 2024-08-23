import * as path from "path";
import * as fs from "fs";
import axios from "axios";

// This is a singleton class that reads the content of a file or URL
export class ContentReader {
  private static instance: ContentReader;

  private constructor() {}

  static getInstance(): ContentReader {
    if (!ContentReader.instance) {
      ContentReader.instance = new ContentReader();
    }
    return ContentReader.instance;
  }

  private isUrl(filePath: string): boolean {
    return filePath.startsWith("http") || filePath.startsWith("https");
  }

  async fetch(filePath: string): Promise<string> {
    if (this.isUrl(filePath)) {
      return await axios.get(filePath);
    }
    return fs.readFileSync(path.resolve(filePath), "utf-8");
  }
}
