const HttpError = require('./httperror')

test('testing message and code, message and code validate', () => {
    //arrange
    const message = 'hello'
    const code = 404
    //act
    const obj = new HttpError(message, code);
    //assert
    expect(obj.message).toBe(message);
    expect(obj.code).toBe(code);
    expect(obj.name).toBe('HttpError');
    expect(() => new HttpError(null,code)).toThrow("message is required")
    expect(() => new HttpError(message,null)).toThrow("code is required")
});