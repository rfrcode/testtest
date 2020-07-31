 const NotFound = require('./httpnotfound')
test("testing not found 404", function () {
    // arrange 
    const message = 'Not found'
   
   // act
   const  obj = new NotFound(message)
    // assert
    expect(obj.message).toBe("Not found");
    expect(obj.code).toBe(404); 
})  