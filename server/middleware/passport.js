const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');

function hash(password, cb) {
    const salt = crypto.randomBytes(16).hexSlice()
    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, dk) => cb(err, salt + dk.toString()))
}

function compare(password, saltdk, cb) {
    const salt = saltdk.slice(0, 32);
    const dk = saltdk.slice(32);
    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, sdk) => cb(err, sdk.toString() === dk))
}

function init({ api, sql }) {
    passport.use(new LocalStrategy((username, password, done) => {
        sql.query(`SELECT u.id, u.username, u.password, u.name, 
                          ac.id as access_id, ac.description, ac.access_name
                    FROM user u 
                        JOIN user_access u_ac ON u.id = u_ac.user_id 
                        JOIN access ac ON ac.id = u_ac.access_id 
                    WHERE u.username = ?`, [username], (err, user) => {
            if (err) return done(err);
            if (!user.length) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            compare(password, user[0].password, (err, res) => {
                if(res) {
                    // Passwords match
                    return done(null, user[0]);
                    
                } else {
                    // Passwords don't match
                    return done(null, false, { message: 'Incorrect password.' });
                }
            })
        });
    }));

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        sql.query(`SELECT u.id, u.username, u.password, u.name, 
                          ac.id as access_id, ac.description, ac.access_name
                    FROM user u 
                        JOIN user_access u_ac ON u.id = u_ac.user_id 
                        JOIN access ac ON ac.id = u_ac.access_id 
                    WHERE u.id = ?`, [id], (err, user) => {
            done(err, user[0]);
        });
    });

    api.use(passport.initialize());
    api.use(passport.session())
}

function middleware(req, res, next) {
    req.passport = passport;
    req.hash = hash
    next();
}

module.exports = { middleware, init };