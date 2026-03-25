const BaseComponent = require("../common/base.component");

class InventoryListComponent extends BaseComponent {
  constructor() {
    super('//div[@class="inventory_list"]');
  }

  async getPrices() {
    const priceEls = await this.rootEl.$$(
      '//div[@class="inventory_item_price"]',
    );

    const pricesArray = await priceEls.map(async (el) => {
      const text = await el.getText();
      return parseFloat(text.replace("$", ""));
    });

    return pricesArray;
  }
}

module.exports = InventoryListComponent;
