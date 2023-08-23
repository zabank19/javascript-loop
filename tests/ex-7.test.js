import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Loops tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test("exercise 7: คุณจะต้องใช้ For Loop", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data}`;

    const func = new Function(code);
    func();
    const hasForLoop = /for\s*\([^)]*\)\s*\{/.test(code);

    expect(hasForLoop).toBe(true);
  });

  test("exercise 7: console.log ออกมาได้อย่างถูกต้องตาม format ที่กำหนด ", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data} return jcbOrders`;

    const func = new Function(code);
    const jcbOrders = func();

    expect(jcbOrders).toEqual([
      {
        id: 2,
        customerName: "Celia Dary",
        productName: "Bread - Pumpernickle, Rounds",
        productPrice: 10746,
        productQuantity: 87,
        creditCardType: "jcb",
      },
      {
        id: 5,
        customerName: "Kennith Bussons",
        productName: "Wine - White, Pinot Grigio",
        productPrice: 94432,
        productQuantity: 75,
        creditCardType: "jcb",
      },
      {
        id: 9,
        customerName: "Cris Druce",
        productName: "Bar Mix - Lemon",
        productPrice: 83104,
        productQuantity: 6,
        creditCardType: "jcb",
      },
    ]);
  });
});
