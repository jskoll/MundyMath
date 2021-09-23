const math = require('../src/MundyMath');
const mundyMath = math.MundyMath

describe("test pow function with single numbers", () => {
    it("should return 4 for pow(2, 2)", () => {
        expect(mundyMath.pow(2, 2)).toBe(4);
    });
    it("should return 8 for pow(2,3)", () => {
        expect(mundyMath.pow(2, 3)).toBe(8);
    });
    it("should return 25 for pow (5, 2)", () => {
        expect(mundyMath.pow(5, 2)).toBe(25);
    });
    it("should return 27 for pow (3, 3)", () => {
        expect(mundyMath.pow(3, 3)).toBe(27);
    });
});

describe("test subtract function with Array<numbers>", () => {
    it("should return [1, 4, 27, 256] for pow([1, 2, 3, 4], [1, 2, 3, 4])", () =>{
         expect(mundyMath.pow([1, 2, 3, 4], [1, 2, 3, 4])).toStrictEqual( [1, 4, 27, 256]);
    });
    it("should return [1, 4, 0, 0] for pow([1, 2], [1, 2, 3, 4])", () =>{
         expect(mundyMath.pow ([1, 2], [1, 2, 3, 4])).toStrictEqual( [1, 4, 0, 0]);
    });
    it("should return [1, 4, 1, 1] for pow([1, 2, 3, 4], [1, 2])", () =>{
         expect(mundyMath.pow([1, 2,  3, 4], [1, 2])).toStrictEqual( [1, 4, 1, 1]);
    });
});

describe("Errors expected when passing none numbers to pow", () => {
    it("should throw an error for subtract('a', 3)", () => {
        expect(() => {
            mundyMath.pow('a', 3)
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
    it("should throw an error for subtract(['a'], [3])", () => {
        expect(() => {
            mundyMath.pow (['a'], [3])
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
    it("should throw an error for pow(4)", () => {
        expect(() => {
            mundyMath.pow(4)
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
});


