import { ContentReader } from "../ContentReader";

jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue("Hello, World from the cloud!"),
}));

jest.mock("fs", () => ({
  readFileSync: jest.fn().mockReturnValue("Hello, World from my filesystem!"),
}));

describe("Test the ContentReader class", () => {
  test("should return an instance of ContentReader", () => {
    const contentReader = ContentReader.getInstance();
    expect(contentReader).toBeInstanceOf(ContentReader);
  });

  test("should read the content of a file", async () => {
    const contentReader = ContentReader.getInstance();
    const content = await contentReader.fetch("example.txt");
    expect(content).toBe("Hello, World from my filesystem!");
  });

  test("should read the content of a URL", async () => {
    const contentReader = ContentReader.getInstance();
    const content = await contentReader.fetch("https://www.example.com");
    expect(content).toBe("Hello, World from the cloud!");
  });
});
