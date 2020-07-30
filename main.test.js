const getError = require('./main')


test("testing sum a is not number", function () {
    // arrange 
    const a = 1
    // act
    //const result = sum(a, b)
    // assert
    expect(() => getError(a, b)).toThrow(Error)
})
