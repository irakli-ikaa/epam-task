const InventoryPage = require("./inventory.page");
const LoginPage = require("./login.page");

/**
 *
 * @param name  {'login' | 'inventory'}
 * @returns {LoginPage | InventoryPage}
 */

function pages(name) {
  const items = {
    login: new LoginPage(),
    inventory: new InventoryPage(),
  };

  return items[name.toLowerCase()];
}

module.exports = {
  InventoryPage,
  LoginPage,
  pages,
};
