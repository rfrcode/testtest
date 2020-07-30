const HttpError = require('./httperror')

class NotAutorized extends HttpError {
    constructor(message= "Not autorized") {
        super(message,401);
        this.name = "NotAutorized";
    }
}

module.exports = NotAutorized