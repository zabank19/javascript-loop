import fs from "fs/promises";

describe("Loops tests cases", () => {

  test("exercise 3: คุณจะต้องใช้ For Loop", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} return minNumber`;

    const func = new Function(code);
    func();
    const hasForLoop = /for\s*\([^)]*\)\s*\{/.test(code);

    expect(hasForLoop).toBe(true);
  });

  test("exercise 3: minNumber ต้องมีค่าเท่ากับ 3", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} return minNumber`;

    const func = new Function(code);
    const minNumber = func();

    expect(minNumber).toBe(3);
  });
});
