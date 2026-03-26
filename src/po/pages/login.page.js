const { LoginBox } = require("../components");
const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("/");
    this.loginBox = new LoginBox();
  }
}

module.exports = LoginPage;
