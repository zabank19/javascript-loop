import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Loops tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("exercise 9: console.log ออกมาได้อย่างถูกต้องตาม format ที่กำหนด", async () => {
    const data = await fs.readFile("./ex-9.js");
    const code = `${data}`;

    const func = new Function(code);
    func();
    const expectedLog = [
      ["Average score is 56.333333333333336"],
      ["Mick has highest score, which is 89 points"],
      ["Ole has lowest score, which is 10 points"],
    ];

    expect(console.log.mock.calls).toEqual(expect.arrayContaining(expectedLog));
  });
});
