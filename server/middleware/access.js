module.exports = (accessList) => (req, res, next) => {
    // TODO if req.user does not have the all the accesses in access list res.status(403).send("unauthorized")
    next();
}