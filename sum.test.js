const sum = require('./sum')

test("testing sum 1+2=3", function () {
    // arrange 
    const a = 1
    const b = 2
    // act
    const result = sum(a, b)
    // assert
    expect(result).toBe(3)
})

test("testing sum a is not number", function () {
    // arrange 
    const a = null
    const b = 2
    // act
    //const result = sum(a, b)
    // assert
    expect(() => sum(a, b)).toThrow(Error)
})

test("testing sum b is not number", function () {
    // arrange 
    const a = 1
    const b = null
    // act
    //const result = sum(a, b)
    // assert
    expect(() => sum(a, b)).toThrow(Error)
})