const LoginBoxComponent = require("../components/login/login-box.component");
const LoginCredentialsComponent = require("../components/login/login-credentials.component");
const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("/");
    this.loginBox = new LoginBoxComponent();
    this.loginCredentials = new LoginCredentialsComponent();
  }
}

module.exports = LoginPage;
