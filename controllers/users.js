const User = require("../models/user.js");
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    let regiUser = await User.register(newUser, password);
    req.login(regiUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "welcome to WonderLust");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};
module.exports.login = async (req, res) => {
  req.flash("success", "welcome back to wonderlust");
  let saveRedirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(saveRedirectUrl);
};
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logout sucessfully");
    res.redirect("/listings");
  });
};
