const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

function init({ api, sql }) {
    passport.use(new LocalStrategy(function(username, password, done) {
        // TODO edit and use real sql
        sql("SELECT user", function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
      
    passport.deserializeUser(function(id, done) {
        req.sql("SELECT user", function(err, user) {
            done(err, user);
        });
    });

    api.use(passport.initialize());
    api.use(passport.session())
}

function middleware(req, res, next) {
    req.passport = passport;
    next();
}

module.exports = { middleware, init };