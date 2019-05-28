//add
describe("Add", function() {
  it("add two number, equal zero", function() {
    let result = Add(0,0);
    expect(result).toBe(0);
  })
  it("add two number, equal -2", function() {
    let result = Add(-1,-1);
    expect(result).toBe(-2);
  })
  it("add two number, equal nine", function() {
    let result = Add(4,5);
    expect(result).toBe(9);
  })
  it("add multiple numbers, equal ten", function() {
    let result = Add(1,2,3,4);
    expect(result).toBe(10);
  })
});

//multiply
describe("Multiply", function() {
  it("multiply two numbers, equal two", function() {
    let result = Multiply(1,2);
    expect(result).toBe(2);
  })
  it("multiply many numbers, equal 24", function() {
    let result = Multiply(1,2,3,4);
    expect(result).toBe(24);
  })

});

