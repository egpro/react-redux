import orderFixture from "../fixtures/orderFixture";

describe("Order fixture", () => {
  test("getting list of order elements not empty", () => {
    expect(orderFixture).not.toBe([]);
  });

  test("getting basket element by name is an object", () => {
    const productId = "ROG ZENITH";
    const product = orderFixture.find(el => el.id === productId);

    expect(product).toEqual({
      id: "ROG ZENITH",
      name: "ASUS ROG ZENITH EXTREME",
      price: 41300,
      count: 1
    });
  });
});
