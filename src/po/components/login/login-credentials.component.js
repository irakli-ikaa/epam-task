const BaseComponent = require("../common/base.component");

class LoginCredentialsComponent extends BaseComponent {
  constructor() {
    super('//div[@class="login_credentials_wrap-inner"]');
  }

  async getStandardUser() {
    const text = await this.rootEl
      .$('//div[@class="login_credentials"]')
      .getText();
    const lines = text.split("\n");
    return lines[1];
  }

  async getPassword() {
    const text = await this.rootEl
      .$('//div[@class="login_password"]')
      .getText();
    const lines = text.split("\n");
    return lines[1];
  }
}

module.exports = LoginCredentialsComponent;
