# MundyMath

This is a simple TypeScript Library that provides the ability to do calculations
The calculations are:
* add
* subtract
* multiply
* divide
* pow
* sqrt

It also provides a utility that allows you to convert a number from one base to 
another.  This conversion can work with any base supported by JavaScript.

## Usage
### MundyMath
#### To import the library
```typescript
import {MundyMath} from "./MundyMath";
```
#### add
The add can add two numbers or all elements of 2 arrays.  If the arrays are not the same
length 0 is added to the end of the array
```typescript
console.log(MundyMath.add(1, 1));
// 2

console.log(MundyMath.add([1, 2, 3], [1, 2, 3]));
//[2, 4, 6]

console.log(MundyMath.add([1, 2, 3], [1]));
//[2, 2, 3]

console.log(MundyMath.add([1], [1, 2, 3]));
//[2, 2, 3]
```
#### subtract / multiply / divide / pow

These expect the same input as add

All of these return expected values for invalid input.  

`Infinity` is returned for anything divided by 0

Errors are thrown where appropriate 

#### sqrt
Calculates the square root of a positive number.

Negative numbers will return `NaN`

Non numbers will return an Error if a non number is provided

### MundyNumberConvert
#### To import the Library

```typescript
import {MundyNumberConvert} from "./MundyNumberConvert";
```

#### convert
This converts a number from one base to another

The first param can be either a string or number
```typescript
console.log(MundyNumberConvert.convert(2, 10, 2))
// 10
```

### Testing
The project provides a suite of Jest tests that cover 100% of the lines of the 2 utilities.  As of v0.0.1 
all test are passing.
