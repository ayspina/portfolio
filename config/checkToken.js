const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // Check for a token being sent as a header or a query string
    let token = req.get('Authorization') || req.query.token;
    if (token) {
        // Remove the 'Bearer' if it was included in the token
        token = token.replace('Bearer ', '');
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            // If valid token, decoded will the token's entire payload
            // If invalid, err will be sent
            req.user = err ? null : decoded.user;
            req.exp = err ? null : new Date(decoded.exp * 1000);
            return next();
        })
    } else {
        req.user = null;
        return next();
    }
};