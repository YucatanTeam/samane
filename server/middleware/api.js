module.exports = api => (req, res, next) => {
    req.api = api;
    next();
}

// req.api access