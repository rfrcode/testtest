const getError = require('./main')

beforeEach(function(){
    spyOn(console, 'warn');
    spyOn(console, 'error');
    spyOn(console, 'log');
  })

  // TODO afterEach quitar spys


test("testing getError ", function () {
    // act
    getError(1)
    getError(2)
    getError(3)
    getError(4)
    // assert
    expect(console.warn).toHaveBeenNthCalledWith(1, "Not found")
    expect(console.warn).toHaveBeenNthCalledWith(2, "Not autorized")
    expect(console.error).toHaveBeenNthCalledWith(1, "critical error")
    expect(console.log).toHaveBeenCalledTimes(4)
})
