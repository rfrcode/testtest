const sum = require('./sum')

test("testing sum 1+2=3, a or b validate is number", function () {
    // arrange 
    const a = 1
    const b = 2
    // act
    const result = sum(a, b)
    // assert
    expect(result).toBe(3)
    expect(() => sum(null, 1)).toThrow(Error)
    expect(() => sum(1, null)).toThrow(Error)
})
