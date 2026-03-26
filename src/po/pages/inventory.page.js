const {
  PrimaryHeader,
  SecondaryHeader,
  InventoryList,
  Sidebar,
} = require("../components");
const BasePage = require("./base.page");

class InventoryPage extends BasePage {
  constructor() {
    super("/inventory.html");
    this.primaryHeader = new PrimaryHeader();
    this.secondaryHeader = new SecondaryHeader();
    this.sideBar = new Sidebar();
    this.inventoryList = new InventoryList();
  }
}

module.exports = InventoryPage;
