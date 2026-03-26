const BaseComponent = require("../common/base.component");

class SecondaryHeaderComponent extends BaseComponent {
  constructor() {
    super('//div[@class="header_secondary_container"]');
  }

  /**
   *
   * @param  option  {'A to Z' | 'Z to A' | 'low to high' | 'high to low'}
   * @returns {*}
   */

  getSortingOption(option) {
    const selectors = {
      "a to z": "Name (A to Z)",
      "z to a": "Name (Z to A)",
      "low to high": "Price (low to high)",
      "high to low": "Price (high to low)",
    };

    return this.rootEl.$(
      `//option[text()="${selectors[option.toLowerCase()]}"]`,
    );
  }
}

module.exports = SecondaryHeaderComponent;
