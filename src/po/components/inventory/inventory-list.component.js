const BaseComponent = require("../common/base.component");

class InventoryListComponent extends BaseComponent {
  constructor() {
    super('//div[@class="inventory_list"]');
  }

  get priceElements() {
    return this.rootEl.$$('//div[@class="inventory_item_price"]');
  }

  getBtnOf(item) {
    return this.rootEl.$(
      `//div[@class="inventory_item" and .//div[text()="${item}"]]//button`,
    );
  }
}

module.exports = InventoryListComponent;
