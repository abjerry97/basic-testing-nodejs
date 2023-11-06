import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should throw an error, if an empty string is provided", () => {
    const input = "";

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrow();
  });
  it("should throw an error, that contains a message (must not be empty)", () => {
    const input = "";

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrow(/must not be empty/);
  });

  it("should throw an error, if a long string of blank is provided", () => {
    const input = "     ";

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrow();
  });
  it("should throw an error, if any other value other than a string is provided", () => {
    const inputNum = 1;
    const inputBool = false;
    const inputObj = {};

    const validationFn = () => {
      validateStringNotEmpty(inputNum);
      validateStringNotEmpty(inputBool);
      validateStringNotEmpty(inputObj);
    };

    expect(validationFn).toThrow();
  });
});


describe("validateNumber()", () => {
    
it("should throw an error, if NaN is provided", () => {
  const input = NaN;

  const validationFn = () => validateNumber(input);

  expect(validationFn).toThrow();
});

it("should throw an error, that contains a message (invalid number)", () => {
  const input = NaN;

  const validationFn = () => validateNumber(input);

  expect(validationFn).toThrow(/Invalid number/);
});

it("should throw an error, if non-numeric is provided", () => {
  const input = "1";

  const validationFn = () => validateNumber(input);

  expect(validationFn).toThrow();
});

it("should not throw an error, if non-numeric is provided", () => {
  const input = 1;

  const validationFn = () => validateNumber(input);

  expect(validationFn).not.toThrow();
});

})