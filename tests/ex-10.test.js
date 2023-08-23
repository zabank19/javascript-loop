import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Loops tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("exercise 10: Code จะต้องทำงานออกมาได้อย่างถูกต้อง", async () => {
    const data = await fs.readFile("./ex-10.js");
    const code = `${data} \n return {result1,result2}`;

    const func = new Function(code);
    const { result1, result2 } = func();
    const expectedLog = [["Tax to be paid: $18000"], ["Tax to be paid: $6000"]];
    expect(result1).toBe(18000);
    expect(result2).toBe(6000);
    expect(console.log.mock.calls).toEqual(expect.arrayContaining(expectedLog));
  });
});
