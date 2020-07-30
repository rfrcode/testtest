const HttpError = require('./httperror')
const NotFound = require('./httpnotfound');
const NotAutorized = require('./httpnotauthorized');

function test(id) {
    if (id === 1) {
        throw new NotFound();
    } else if (id === 2) {
        throw new NotAutorized();
    } else if (id === 3) {
        throw new Error("critical error")
    }
}

function getError(id) {
    try {
        test(id)
    }
    catch (e) {
        if (e instanceof HttpError) {
            console.warn(e.message)
        }
        else {
            console.error(e.message)
        }
    }
    finally {
        console.log("end")
    }
}

module.exports = getError