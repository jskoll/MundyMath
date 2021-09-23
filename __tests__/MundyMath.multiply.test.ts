const math = require("../MundyMath");
const mundyMath = math.MundyMath

describe("test multiply function with single numbers", () => {
    it("should return 50 for multiply(10,5)", () => {
        expect(mundyMath.multiply(10, 5)).toBe(50);
    });
    it("should return 6 for multiply(2,3)", () => {
        expect(mundyMath.multiply(2, 3)).toBe(6);
    });
    it("should return -40 for multiply (5, -8)", () => {
        expect(mundyMath.multiply(5, -8)).toBe(-40);
    });
    it("should return 5.2 for multiply (1.3, 4)", () => {
        expect(mundyMath.multiply(1.3, 4)).toBe(5.2);
    });
});

describe("test subtract function with Array<numbers>", () => {
    it("should return [1, 4, 9, 16] for multiply([1, 2, 3, 4], [1, 2, 3, 4])", () =>{
         expect(mundyMath.multiply([1, 2, 3, 4], [1, 2, 3, 4])).toStrictEqual( [1, 4, 9, 16]);
    });
    it("should return [1, 4, 0, 0] for multiply([1, 2], [1, 2, 3, 4])", () =>{
         expect(mundyMath.multiply ([1, 2], [1, 2, 3, 4])).toStrictEqual( [1, 4, 0, 0]);
    });
    it("should return [1, 4, 0, 0] for multiply([1, 2, 3, 4], [1, 2])", () =>{
         expect(mundyMath.multiply([1, 2,  3, 4], [1, 2])).toStrictEqual( [1, 4, 0, 0]);
    });
});

describe("Errors expected when passing none numbers to subtract", () => {
    it("should throw an error for multiply('a', 3)", () => {
        expect(() => {
            mundyMath.multiply('a', 3)
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
    it("should throw an error for multiply(['a'], [3])", () => {
        expect(() => {
            mundyMath.multiply (['a'], [3])
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
});


