import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Loops tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("exercise 5: console.log ออกมาได้อย่างถูกต้องตาม format ที่กำหนด ", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data}`;

    const func = new Function(code);
    func();
    const expectedLog = [
      ["Order id: 8, Total price: 36884000"],
      ["Total price is 379925"],
      ["Total: 62255151"],
      [
        [
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
        ],
      ],
    ];

    expect(console.log.mock.calls).toEqual(expect.arrayContaining(expectedLog));
  });
});
