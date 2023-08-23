import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Loops tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test("exercise 8: คุณจะต้องใช้ For Loop", async () => {
    const data = await fs.readFile("./ex-8.js");
    const code = `${data}`;

    const func = new Function(code);
    func();
    const hasForLoop = /for\s*\([^)]*\)\s*\{/.test(code);

    expect(hasForLoop).toBe(true);
  });

  test("exercise 8: console.log ออกมาได้อย่างถูกต้องตาม format ที่กำหนด ", async () => {
    const data = await fs.readFile("./ex-8.js");
    const code = `${data} return sumPurchasedAmount`;

    const func = new Function(code);
    const sumPurchasedAmount = func();

    expect(sumPurchasedAmount).toBe(62255151);
    expect(console.log.mock.calls).toContainEqual(["Total: 62255151"]);
  });
});
