const BaseComponent = require("../common/base.component");

class SecondaryHeaderComponent extends BaseComponent {
  constructor() {
    super('//div[@class="header_secondary_container"]');
  }

  /**
   *
   * @param  text  {'A to Z' | 'Z to A' | 'low to high' | 'high to low'}
   * @returns {*}
   */

  async sortBy(text) {
    const selectors = {
      "a to z": "Name (A to Z)",
      "z to a": "Name (Z to A)",
      "low to high": "Price (low to high)",
      "high to low": "Price (high to low)",
    };

    return await this.rootEl
      .$('//select[@class="product_sort_container"]')
      .selectByVisibleText(selectors[text.toLowerCase()]);
  }
}

module.exports = SecondaryHeaderComponent;
