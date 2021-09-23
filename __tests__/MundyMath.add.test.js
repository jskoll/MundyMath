const math = require('../MundyMath');
const mundyMath = math.MundyMath

describe("test add function with single numbers", () => {
    it("should return 15 for add(10,5)", () => {
        expect(mundyMath.add(10, 5)).toBe(15);
    });
    it("should return 5 for add(2,3)", () => {
        expect(mundyMath.add(2, 3)).toBe(5);
    });
    it("should return -3 for add (5, -8)", () => {
        expect(mundyMath.add(5, -8)).toBe(-3);
    });
    it("should return -3 for add (5, -8)", () => {
        expect(mundyMath.add(5, -8)).toBe(-3);
    });
    it("should return 5.3 for add (1.3, 4)", () => {
        expect(mundyMath.add(1.3, 4)).toBe(5.3);
    });
});

describe("test add function with Array<numbers>", () => {
    it("should return [2, 4, 6, 8] for add([1, 2, 3, 4], [1, 2, 3, 4])", () =>{
         expect(mundyMath.add([1, 2, 3, 4], [1, 2, 3, 4])).toStrictEqual( [2, 4, 6, 8]);
    });
    it("should return [2, 4, 3, 4] for add([1, 2], [1, 2, 3, 4])", () =>{
         expect(mundyMath.add([1, 2], [1, 2, 3, 4])).toStrictEqual( [2, 4, 3, 4]);
    });
    it("should return [2, 4, 3, 4] for add([1, 2, 3, 4], [1, 2])", () =>{
         expect(mundyMath.add([1, 2,  3, 4], [1, 2])).toStrictEqual( [2, 4, 3, 4]);
    });
});

describe("Errors expected when passing none numbers to add", () => {
    it("should throw an error for add('a', 3)", () => {
        expect(() => {
            mundyMath.add('a', 3)
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
    it("should throw an error for add(['a'], [3])", () => {
        expect(() => {
            mundyMath.add(['a'], [3])
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
});


