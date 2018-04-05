import { saveToServer, serializeData } from "../utils";

describe("utils", () => {
  describe("serializedData", () => {
    test("should return Json stringify", () => {
      const data = {
        key_1: { sub_key_1: 1, sub_key_2: 2 },
        key_2: 2,
        key_3: 3
      };

      expect(serializeData(data)).toString();
    });
  });

  describe("saveToServer", () => {
    test("should return undefined if data is empty", () => {
      const data = {};

      expect(saveToServer(data)).toBe(undefined);
    });
  });
});
