const BaseComponent = require("../common/base.component");

class InventoryListComponent extends BaseComponent {
  constructor() {
    super('//div[@class="inventory_list"]');
  }

  get priceElements() {
    return this.rootEl.$$('//div[@class="inventory_item_price"]');
  }

  get itemButtons() {
    return this.rootEl.$$('//div[@class="inventory_item"]//button');
  }
}

module.exports = InventoryListComponent;
