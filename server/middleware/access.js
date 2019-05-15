module.exports = (accessList) => (req, res, next) => {
        if(!req.user) return res.status(401).end("Unauthorized !");
        if(!accessList.includes(req.user.access_name)) return res.status(403).end("Access Denied !");
        next();
}