import { describe, expect, test } from "@jest/globals";
import { stringLength,reverseString,Calculator,capitalize } from "./index";

describe("Test string length", () => {
  test("Should return a valid length of string", () => {
    const str = "Danny";
    const strLen = stringLength(str);
    expect(strLen).toBe(5);
  });
  test("Should return Error message if string is less than 1", () => {
    const str = "";
    const strLen = stringLength(str);
    expect(strLen).toBe("Error");
  });
  test("Should Error message if string is greater than 10", () => {
    const str = "Hello daniel how are you doing";
    const strLen = stringLength(str);
    expect(strLen).toBe("Error");
  });
});

describe("Test string reverse", () => {
    test("Should return a reverse of string", () => {
      const str = "Danny";
      const strLen = reverseString(str);
      expect(strLen).toBe("ynnaD");
    });
  });

  describe("Test calculator", () => {
    test("Should return a sum of two numbers", () => {
      const x=20;
      const y=10;

      const a=0;
      const b=10;

      const c=20;
      const d=-30;
      const sum1 = Calculator['add'](x,y);
      const sum2 = Calculator['add'](a,b);
      const sum3 = Calculator['add'](c,d);
      expect(sum1).toBe(30);
      expect(sum2).toBe(10);
      expect(sum3).toBe(-10);

    });
    test("Should substract two numbers", () => {
        const x=20;
        const y=10;
  
        const a=0;
        const b=10;
  
        const c=-80;
        const d=-30;
        const sub1 = Calculator['substract'](x,y);
        const sub2 = Calculator['substract'](a,b);
        const sub3 = Calculator['substract'](c,d);
        expect(sub1).toBe(10);
        expect(sub2).toBe(-10);
        expect(sub3).toBe(-50);
  
      });

      test("Should return product of two numbers", () => {
        const x=2;
        const y=100;
  
        const a=0;
        const b=10;
  
        const c=-80;
        const d=-30;
        const prod1 = Calculator['multiply'](x,y);
        const prod2 = Calculator['multiply'](a,b);
        const prod3 = Calculator['multiply'](c,d);
        expect(prod1).toBe(200);
        expect(prod2).toBe(0);
        expect(prod3).toBe(2400);
  
      });

      test("Should return ratio of two numbers", () => {
        const x=20;
        const y=10;
  
        const a=0;
        const b=10;
  
        const c=15;
        const d=-3;
        const ratio1 = Calculator['devide'](x,y);
        const ration2 = Calculator['devide'](a,b);
        const ration3 = Calculator['devide'](c,d);
        expect(ratio1).toBe(2);
        expect(ration2).toBe(0);
        expect(ration3).toBe(-5);
  
      });
    
  });


describe("Test string reverse", () => {
    test("Should return a reverse of string", () => {
      const str = "Danny";
      const strLen = reverseString(str);
      expect(strLen).toBe("ynnaD");
    });
  });

  describe("Test capitalize", () => {
    test("Should return the capitalized string", () => {
      const str="hello danny how are you";
      const capitalizedSentense=capitalize(str);
      expect(capitalizedSentense).toBe('Hello Danny How Are You');
    });
    test("Should return error if user pass numeric string", () => {
      const str="20";
      const capitalizedSentense=capitalize(str);
      expect(capitalizedSentense).toBe('Error');
    });
  });

