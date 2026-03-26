const { LoginBox, LoginCredentials } = require("../components");
const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("/");
    this.loginBox = new LoginBox();
    this.loginCredentials = new LoginCredentials();
  }
}

module.exports = LoginPage;
