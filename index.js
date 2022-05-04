export const stringLength = (string) => {
  return string.length > 0 && string.length <= 10 ? string.length : "Error";
};

export const reverseString = (string) => {
  return string.split(" ").map(function (char) {
    return char.split("").reverse().join("");
  })[0];
};


export const Calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  substract: (num1, num2) => {
    return num1 - num2;
  },
  devide: (num1, num2) => {
    return num1 / num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
};

export const capitalize = (string) => {
  if (
    string.match(/^-?\d+$/) ||
    string.match(/^\d+\.\d+$/)
  ) {
    return "Error";
  }
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};