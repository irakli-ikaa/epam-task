const InventoryListComponent = require("../components/inventory/inventory-list.component");
const PrimaryHeaderComponent = require("../components/inventory/primary-header.component");
const SecondaryHeaderComponent = require("../components/inventory/secondary-header.component");
const BasePage = require("./base.page");

class InventoryPage extends BasePage {
  constructor() {
    super("/inventory.html");
    this.primaryHeader = new PrimaryHeaderComponent();
    this.secondaryHeader = new SecondaryHeaderComponent();
    this.inventoryList = new InventoryListComponent();
  }
}

module.exports = InventoryPage;
