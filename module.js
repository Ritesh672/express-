// we will create a middleware for our in here

module.exports = function logger(req, res , next) {

    console.log("Request method", req.method);
     next();
}