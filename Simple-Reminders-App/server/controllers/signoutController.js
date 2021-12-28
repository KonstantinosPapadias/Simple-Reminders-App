function signout(req, res) {
    req.logout();
    res.redirect("http://localhost:3000");
}

module.exports = {signout}