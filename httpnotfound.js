const HttpError = require('./httperror')
const {NOT_FOUND} = require('./errormessage')

class NotFound extends HttpError {
    constructor(message = NOT_FOUND) {
        super(message, 404)
        this.name = "NotFound"
    }
}

module.exports = NotFound