const convert = require("../src/MundyNumberConvert")

const mundyNumberConvert = convert.MundyNumberConvert;

describe("test convert function", () => {
    it("should return 10 for convert(10, 10, 2)", () => {
        expect(mundyNumberConvert.convert(2, 10, 2)).toBe('10');
    });
    it("should return -1 for subtract(2,3)", () => {
        expect(mundyNumberConvert.convert('2', 10, 2)).toBe('10');
    });
});

describe("test convert function with invalid input", () => {
    it("should return 10 for convert(10, 10, 2)", () => {
        expect(mundyNumberConvert.convert('a', 10, 2)).toBe("NaN");
    });
    it("should throw an error", () => {
        expect(mundyNumberConvert.convert).toThrow(TypeError);
    });
});
