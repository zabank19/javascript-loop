import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Loops tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test("exercise 5: คุณจะต้องใช้ For Loop", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data}`;

    const func = new Function(code);
    func();
    const hasForLoop = /for\s*\([^)]*\)\s*\{/.test(code);

    expect(hasForLoop).toBe(true);
  });

  test("exercise 5: console.log ออกมาได้อย่างถูกต้องตาม format ที่กำหนด ", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data}`;

    const func = new Function(code);
    func();
    const expectedLog = [["Order id: 8, Total price: 36884000"]];

    expect(console.log.mock.calls).toEqual(expect.arrayContaining(expectedLog));
  });
});
