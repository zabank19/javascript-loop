import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Loops tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("exercise 1: Decrease Student Scores correctly", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return scores`;

    const func = new Function(code);
    func();

    expect(console.log).toHaveBeenCalledWith([79, 60, 50, 40, 90, 61]);
  });

  test("exercise 2: Displaying Restaurant Name correctly", async () => {
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

  test("exercise 3: Min Numbers", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} return minNumber`;

    const func = new Function(code);
    const minNumber = func();

    expect(minNumber).toBe(3);
  });

  test("exercise 4: Reverse Strings", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} return reversedCompanyName`;

    const func = new Function(code);
    const reversedCompanyName = func();

    expect(console.log).toHaveBeenCalledWith("andliahT pUhceT");
    expect(reversedCompanyName).toBe("andliahT pUhceT");
  });

  test("exercise 5: Orders Analysis", async () => {
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

    // expect(console.log.mock.calls).toContainEqual();
    expect(console.log.mock.calls).toEqual(expect.arrayContaining(expectedLog));
  });

  test.only("exercise 6: Classroom Scores", async () => {
    const data = await fs.readFile("./ex-6.js");
    const code = `${data}`;

    const func = new Function(code);
    const expectedLog = [
      ["Average score is 56"],
      ["Mick has highest score, which is 89 points"],
      ["Ole has lowest score, which is 10 points"],
    ];
    func();

    expect(console.log.mock.calls).toEqual(expect.arrayContaining(expectedLog));
  });
});
