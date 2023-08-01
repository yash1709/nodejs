module.exports = reqFilter = (request, response, next) => {
    if (!request.query.age) {
        response.send("Please provide age")
    }
    else if (request.query.age < 18) {
        response.send("You cannot access this page")
    }
    else {
        next();
    }
}