//https://stackoverflow.com/questions/49886244/how-to-test-class-constructor-in-jest
const NotAutorized = require('./httpnotauthorized')
test("testing NotAutorized new NotAutorized(message= Not autorized)", () => {
        // arrange 
        const message = "Not autorized"
        // act
        const classInstance = new NotAutorized(message);
        // assert
        expect(classInstance.message).toBe(message);
        expect(classInstance.code).toBe(401);
        expect(classInstance.name).toBe("NotAutorized")
})