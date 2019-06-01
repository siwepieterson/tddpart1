//addition
function Add(num1, num2, num3, num4) {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

//multiplication

function Multiply(num1, num2, num3, num4) {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}


class Calc {
  constructor() {
    this.lastNum = 0;
    this.slot = [];
  }
  //adding numbers
  addNum() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    this.lastNum = sum;
    return sum;
  }

  //muiltiplying numbers
  multiplyNum() {
    var product = 1;
    for (let i = 0; i < arguments.length; i++) {
      product *= arguments[i];
    }
    this.lastNum = product;
    return product;
  }    //return last
  last() {
    return this.lastNum;
  } set_slot(number) {
    this.slot[number] = this.lastNum;
  } get_slot(number) {
    return this.slot[number];
  }
};
