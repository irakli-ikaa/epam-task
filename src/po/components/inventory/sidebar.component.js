const BaseComponent = require("../common/base.component");

class SidebarComponent extends BaseComponent {
  constructor() {
    super('//div[@class="bm-menu-wrap"]');
  }

  get resetStateBtn() {
    return this.rootEl.$('//a[text()="Reset App State"]');
  }

  get closeSidebarBtn() {
    return this.rootEl.$('//button[text()="Close Menu"]');
  }
}

module.exports = SidebarComponent;
