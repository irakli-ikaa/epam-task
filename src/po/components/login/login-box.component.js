const BaseComponent = require("../common/base.component");

class LoginBoxComponent extends BaseComponent {
  constructor() {
    super('//div[@class="login-box"]');
  }

  get submitBtn() {
    return this.rootEl.$('//input[@type="submit"]');
  }

  /**
   *
   * @param  name  {'userName' | 'password'}
   * @returns {*}
   */
  input(name) {
    const selectors = {
      userName: '//input[@name="user-name"]',
      password: '//input[@name="password"]',
    };

    return this.rootEl.$(selectors[name]);
  }
}

module.exports = LoginBoxComponent;
