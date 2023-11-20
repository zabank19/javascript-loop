import fs from "fs/promises";

describe("Loops tests cases", () => {
  test("exercise 6: reversedCompanyName ต้องมีค่าเป็น 'dnaliahT pUhceT'", async () => {
    const data = await fs.readFile("./ex-6.js");
    const code = `${data} return reversedCompanyName`;

    const func = new Function(code);
    const reversedCompanyName = func();

    expect(reversedCompanyName).toBe("dnaliahT pUhceT");
  });
});
