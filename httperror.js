class HttpError extends Error {
    constructor(message, code) {
        if (!message) {
            throw "message is required";
        }
        if (!code) {
            throw "code is required";
        }
        super(message);
        this.code = code;
        this.name = "HttpError";
    }

}
module.exports = HttpError