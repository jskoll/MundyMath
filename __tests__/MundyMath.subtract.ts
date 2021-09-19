const MundyMath = require('../MundyMath');


describe("test subtract function with single numbers", () => {
    it("should return 5 for add(10,5)", () => {
        expect(MundyMath.subtract(10, 5)).toBe(5);
    });
    it("should return -1 for subtract(2,3)", () => {
        expect(MundyMath.subtract(2, 3)).toBe(-1);
    });
    it("should return 13 for subtract (5, -8)", () => {
        expect(MundyMath.subtract(5, -8)).toBe(13);
    });
    it("should return 5.3 for subtract (1.3, 4)", () => {
        expect(MundyMath.subtract(1.3, 4)).toBe(-2.7);
    });
});

describe("test subtract function with Array<numbers>", () => {
    it("should return [0, 0, 0, 0] for add([1, 2, 3, 4], [1, 2, 3, 4])", () =>{
         expect(MundyMath.subtract([1, 2, 3, 4], [1, 2, 3, 4])).toStrictEqual( [0, 0, 0, 0]);
    });
    it("should return [0, 0 -3, -4] for add([1, 2], [1, 2, 3, 4])", () =>{
         expect(MundyMath.subtract ([1, 2], [1, 2, 3, 4])).toStrictEqual( [0, 0, -3, -4]);
    });
    it("should return [2, 4, 3, 4] for add([1, 2, 3, 4], [1, 2])", () =>{
         expect(MundyMath.subtract([1, 2,  3, 4], [1, 2])).toStrictEqual( [0, 0, 3, 4]);
    });
});

describe("Errors expected when passing none numbers to subtract", () => {
    it("should throw an error for add('a', 3)", () => {
        expect(() => {
            MundyMath.subtract('a', 3)
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
    it("should throw an error for add(['a'], [3])", () => {
        expect(() => {
            MundyMath.subtract (['a'], [3])
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
});


