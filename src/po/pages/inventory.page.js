const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("/inventory.html");
  }
}

module.exports = LoginPage;
