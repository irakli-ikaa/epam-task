const BaseComponent = require("../common/base.component");

class SecondaryHeaderComponent extends BaseComponent {
  constructor() {
    super('//div[@class="header_secondary_container"]');
  }

  get sortingSelection() {
    return this.rootEl.$('//select[@class="product_sort_container"]');
  }
}

module.exports = SecondaryHeaderComponent;
