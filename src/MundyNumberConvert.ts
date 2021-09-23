
export const MundyNumberConvert = {
    convert: (a: string | number, fromBase: number, toBase: number): string => {
        if (typeof  a === 'string') {
            a = parseInt(a, fromBase)
        }

        return a.toString(toBase);
    }
}
