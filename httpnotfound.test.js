 const NotFound = require('./httpnotfound')
 const file = process.env.culture === "en" ? './errormessage' : './errormessage_es'
 const {NOT_FOUND} = require(file)

test("testing not found 404", function () {
    // arrange 
    const message = NOT_FOUND
   
   // act
   const  obj = new NotFound(message)
    // assert
    expect(obj.message).toBe(NOT_FOUND);
    expect(obj.code).toBe(404); 
    expect(obj.name).toBe("NotFound")
})  