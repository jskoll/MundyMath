const math = require('../MundyMath');
const mundyMath = math.MundyMath


describe("test divide function with single numbers", () => {
    it("should return 2 for divide(10,5)", () => {
        expect(mundyMath.divide(10, 5)).toBe(2);
    });
    it("should return 2 for divide(3,3)", () => {
        expect(mundyMath.divide(6, 3)).toBe(2);
    });
    it("should return 5 for divide (40, -8)", () => {
        expect(mundyMath.divide(40, 8)).toBe(5);
    });
    it("should return 2.1 for divide (4.2, 2)", () => {
        expect(mundyMath.divide(4.2, 2)).toBe(2.1);
    });
});

describe("test divide function with Array<numbers>", () => {
    it("should return [0, 0, 0, 0] for subtract([1, 2, 3, 4], [1, 2, 3, 4])", () =>{
         expect(mundyMath.divide([1, 2, 3, 4], [1, 2, 3, 4])).toStrictEqual( [1, 1, 1, 1]);
    });
    it("should return [0, 0 -3, -4] for subtract([1, 2], [1, 2, 3, 4])", () =>{
         expect(mundyMath.divide ([1, 2], [1, 2, 3, 4])).toStrictEqual( [1, 1, 0, 0]);
    });
    it("should return [2, 4, 3, 4] for subtract([1, 2, 3, 4], [1, 2])", () =>{
         expect(mundyMath.divide([1, 2,  3, 4], [1, 2])).toStrictEqual( [1,1, Infinity, Infinity]);
    });
});

describe("Errors expected when passing none numbers to divide", () => {
    it("should throw an error for divide('a', 3)", () => {
        expect(() => {
            mundyMath.subtract('a', 3)
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
    it("should throw an error for divide(['a'], [3])", () => {
        expect(() => {
            mundyMath.subtract (['a'], [3])
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
});


