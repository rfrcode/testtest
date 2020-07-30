const HttpError = require('./httperror')

class NotFound extends HttpError {
    constructor(message = "Not found") {
        super(message,404)
        this.name = "NotFound"
    }
}

module.exports = NotFound