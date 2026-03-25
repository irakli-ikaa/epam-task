const InventoryListComponent = require("../components/inventory/inventory-list.component");
const SecondaryHeaderComponent = require("../components/inventory/secondary-header.component");
const BasePage = require("./base.page");

class InventoryPage extends BasePage {
  constructor() {
    super("/inventory.html");
    this.secondaryHeader = new SecondaryHeaderComponent();
    this.inventoryList = new InventoryListComponent();
  }
}

module.exports = InventoryPage;
