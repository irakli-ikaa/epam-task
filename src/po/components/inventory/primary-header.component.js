const BaseComponent = require("../common/base.component");

class PrimaryHeaderComponent extends BaseComponent {
  constructor() {
    super('//div[@class="primary_header"]');
  }

  get shoppingCartBadge() {
    return this.rootEl.$('//span[@class="shopping_cart_badge"]');
  }

  get menuBtn() {
    return this.rootEl.$('//button[text()="Open Menu"]');
  }
}

module.exports = PrimaryHeaderComponent;
