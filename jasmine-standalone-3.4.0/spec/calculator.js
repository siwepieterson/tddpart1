//addition
describe("Add", function () {
  it("add two number, equal zero", function () {
    var result = Add(0, 0);
    expect(result).toBe(0);
  })
  it("add two number, equal -2", function () {
    var result = Add(-1, -1);
    expect(result).toBe(-2);
  })
  it("add two number, equal nine", function () {
    var result = Add(4, 5);
    expect(result).toBe(9);
  })
  it("add multiple numbers, equal ten", function () {
    var result = Add(1, 2, 3, 4);
    expect(result).toBe(10);
  })
});

//multiplication
describe("Multiply", function () {
  it("should multiply two numbers, equal 2", function () {
    var result = Multiply(1, 2);
    expect(result).toBe(2);
  })
  it("should multiply many numbers, equal 24", function () {
    var result = Multiply(1, 2, 3, 4);
    expect(result).toBe(24);
  })

});

//adding numbers
describe("Add", function () {
  var answer = new Calc();
  it("should add two numbers and return 0", function () {
    var result = answer.addNum(0, 0);
    expect(result).toBe(0);
  })
  it("should add two negative numbers and return -2", function () {
    var result = answer.addNum(-1, -1);
    expect(result).toBe(-2);
  })
  it("should add two numbers and return 9", function () {
    var result = answer.addNum(4, 5);
    expect(result).toBe(9);
  })
  it("should add two numbers and return 10", function () {
    var result = answer.addNum(1, 2, 3, 4);
    expect(result).toBe(10);
  })
});//multiplication numbers
describe("Multiply", function () {
  var answer = new Calc();
  it("should multiply two numbers and return 2", function () {
    var result = answer.multiplyNum(1, 2);
    expect(result).toBe(2);
  })
  it("should multiply numbers and return 24", function () {
    var result = answer.multiplyNum(1, 2, 3, 4);
    expect(result).toBe(24);
  })
});//last
describe("last returns the result of the last function called", function () {
  var answer = new Calc();
  it("should return 2", function () {
    answer.multiplyNum(1, 2);
    var result = answer.last();
    expect(result).toBe(2);
  })
  it("should return 3", function () {
    answer.addNum(1, 2);
    var result = answer.last();
    expect(result).toBe(3);
  })
  it("should return 5", function () {
    answer.addNum(1, 2);
    var result = answer.addNum(answer.last(), 2);
    expect(result).toBe(5);
  })
});//Memory Slots
describe(" calculator to remember more stuff", function () {
  var answer = new Calc();
  it("should return 3", function () {
    answer.addNum(1, 2);
    answer.set_slot(1);
    var result = answer.get_slot(1)
    expect(result).toBe(3);
  })
  it("should return 9", function () {
    answer.addNum(1, 2);
    answer.set_slot(1);
    var result = answer.addNum(answer.get_slot(1), 6);
    expect(result).toBe(9);
  })
  it("should return 12", function () {
    answer.addNum(1, 2);
    answer.set_slot(1);
    var result = answer.multiplyNum(answer.get_slot(1), 4);
    expect(result).toBe(12);
  })
});