import fs from "fs/promises";

describe("Loops tests cases", () => {
  test("exercise 4: คุณต้องใช้ While Loop", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} return newRestaurants`;

    const func = new Function(code);
    func();
    const hasWhileLoop = /while\s*\(/.test(code);

    expect(hasWhileLoop).toBe(true);
  });

  test("exercise 2: ชื่อร้านอาหารต้องแสดงออกมาอย่างถูกต้องตาม format ที่กำหนดให้", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return newRestaurants`;

    const func = new Function(code);
    const newRestaurants = func();

    expect(newRestaurants).toStrictEqual([
      "Restaurant Name: KFC",
      "Restaurant Name: MOMO PARADISE",
      "Restaurant Name: Nabezo",
    ]);
  });
});
