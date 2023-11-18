exports = module.exports = function (req, res) {
    console.log("INDEX",req.method);
    // console.log(req.body);

    // let isAuthenticated = req.oidc.isAuthenticated();
    // let user = req.oidc.user;
    
    //GET
    // console.log(user);
    res.render("index");
};

  