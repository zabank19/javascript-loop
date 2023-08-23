import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Loops tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test("exercise 6: คุณจะต้องใช้ For Loop", async () => {
    const data = await fs.readFile("./ex-6.js");
    const code = `${data}`;

    const func = new Function(code);
    func();
    const hasForLoop = /for\s*\([^)]*\)\s*\{/.test(code);

    expect(hasForLoop).toBe(true);
  });

  test("exercise 6: console.log ออกมาได้อย่างถูกต้องตาม format ที่กำหนด ", async () => {
    const data = await fs.readFile("./ex-6.js");
    const code = `${data} return birdiePurchasedAmount`;

    const func = new Function(code);
    const birdiePurchasedAmount = func();

    expect(birdiePurchasedAmount).toBe(379925);
    expect(console.log.mock.calls).toContainEqual(["Total price is 379925"]);
  });
});
