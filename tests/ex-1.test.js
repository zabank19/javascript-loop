import fs from "fs/promises";

describe("Loops tests cases", () => {
  test("exercise 1: คะแนนจะต้องเป็น [79, 60, 50, 40, 90, 61]", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return scores`;

    const func = new Function(code);
    const scores = func();

    expect(scores).toStrictEqual([79, 60, 50, 40, 90, 61]);
  });

  test("exercise 1: คุณจะต้องใช้ For Loop", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return scores`;

    const func = new Function(code);
    func();
    const hasForLoop = /for\s*\([^)]*\)\s*\{/.test(code);

    expect(hasForLoop).toBe(true);
  });
});
