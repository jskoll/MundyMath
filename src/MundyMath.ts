enum CalcTypes {
    ADD = 'add',
    SUBTRACT = 'subtract',
    MULTIPLY = 'multiply',
    DIVIDE = 'divide',
    POW = 'pow',
    SQRT = 'sqrt',
}

export const MundyMath = {
    add: (a: number | Array<number>, b: number | Array<number>): number | Array<number> => {
        return calculate(CalcTypes.ADD, a, b)
    },

    subtract: (a: number | Array<number>, b: number | Array<number>): number | Array<number> => {
        return calculate(CalcTypes.SUBTRACT, a, b)
    },

    multiply: (a: number | Array<number>, b: number | Array<number>): number | Array<number> => {
        return calculate(CalcTypes.MULTIPLY, a, b)
    },

    divide: (a: number | Array<number>, b: number | Array<number>): number | Array<number> => {
        return calculate(CalcTypes.DIVIDE, a, b)
    },

    pow: (a: number | Array<number>, b: number | Array<number>): number | Array<number> => {
        return calculate(CalcTypes.POW, a, b)
    },

    sqrt: (a: number | Array<number>): number | Array<number> => {
        return calculate(CalcTypes.SQRT, a)
    },
}


function calculate(type: string, a: number | Array<number>, b: number | Array<number> | null = null): any {
    if (type === CalcTypes.SQRT && isNumeric(a)) {
        return doCalculation(type, a as number);
    }

    if (isNumeric(a) && isNumeric(b)) {
        return doCalculation(type, a as number, b as number);
    }

    if (Array.isArray(a) && Array.isArray(b)) {
        let pairs: Array<Array<number>> = iterateOverTwoArrays(a, b);
        return pairs.map((val: Array<number>) => calculate(type, val[0], val[1]));
    }

    throw new Error("Unable to run calculation, each value must be either numeric or an array of numeric values");
}

function isNumeric(n: any): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function iterateOverTwoArrays(a: Array<number>, b: Array<number>): Array<Array<number>> {
    const aLen: number = a.length;
    const bLen: number = b.length;
    const diff: number = Math.abs(aLen - bLen);
    const zeroArray: Array<number> = Array(diff).fill(0);

    if (aLen > bLen) {
        b = b.concat(zeroArray);
    } else if (bLen > aLen) {
        a = a.concat(zeroArray);
    }

    return a.map((val: number, idx: number) => {
        return [val, b[idx]];
    })
}

function doCalculation(type: string, a: number, b: number | null = null): number | undefined{
    b = b ?? 0;
    switch (type) {
        case CalcTypes.ADD:
            return a + b;
        case CalcTypes.SUBTRACT:
            return a - b;
        case CalcTypes.MULTIPLY:
            return a * b;
        case CalcTypes.DIVIDE:
            return a / b;
        case CalcTypes.POW:
            return Math.pow(a, b)
        case CalcTypes.SQRT:
            return Math.sqrt(a);
    }
}
