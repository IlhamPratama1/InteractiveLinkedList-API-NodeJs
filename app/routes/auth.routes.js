const controller = require('../controllers/auth.controller');
const { authValidation } = require('../middleware/index');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup",
        [
            authValidation.checkUsernameAndEmail,
            authValidation.checkRolesExisted
        ],
        controller.signup
    );

    app.post("/api/auth/signin", controller.signin);
}