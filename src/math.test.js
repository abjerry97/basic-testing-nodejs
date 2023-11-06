import { it, expect } from "vitest";

import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});


it("should yield NaN if invalid number is provided",()=>{
    const input = ['invalid','2'] 
    const result =add(input)

    expect(result).toBeNaN()
})

it("should yield a correct sum if an array of numeric string is provided",()=>{
    const input = ['0','1']
    const expectedResult = input.reduce(
        (prevValue, curValue) => +prevValue + +curValue,
        0
      );

    const result =add(input)

    expect(result).toBe(expectedResult)
})

it("should throw an error if no value is passed into the function",()=>{
    const resultFn = ()=>{ add()}

    expect(resultFn).toThrow()
})


it("Should throw an error if provided with multiple arguments instead of an array",()=>{
    const num1 = 1
    const num2 = 2

    const resultFn = ()=>{
        add(num1,num2)
    }
    expect(resultFn).toThrow(/is not iterable/)
})
