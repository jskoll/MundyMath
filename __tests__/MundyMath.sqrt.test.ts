const math = require('../src/MundyMath');
const mundyMath = math.MundyMath


describe("test divide function with single numbers", () => {
    it("should return 2 for sqrt(4)", () => {
        expect(mundyMath.sqrt(4)).toBe(2);
    });
    it("should return 12 for sqrt(144)", () => {
        expect(mundyMath.sqrt(144)).toBe(12);
    });
    it("should return 5 for sqrt (40, -8)", () => {
        expect(mundyMath.sqrt(64)).toBe(8);
    });
    it("should return 5.2 for sqrt (27.04)", () => {
        expect(mundyMath.sqrt(27.04)).toBe(5.2);
    });
});

describe("Errors expected when passing none numbers to sqrt", () => {
    it("should throw an error for sqrt('a')", () => {
        expect(() => {
            mundyMath.sqrt('a')
        }).toThrow("Unable to run calculation, each value must be either numeric or an array of numeric values")
    });
    it("should be NaN sqrt(-4)", () => {
        expect(mundyMath.sqrt(-4)).toBe(NaN);
    })
});


