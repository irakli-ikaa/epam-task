const InventoryPage = require("../po/pages/inventory.page");
const LoginPage = require("../po/pages/login.page");

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

// describe("Login Page", () => {
//   beforeEach(async () => {
//     await loginPage.open();
//   });

//   it("check page title", async () => {
//     await expect(browser).toHaveTitle("Swag Labs");
//   });

//   it("The login page should show an error when incorrect credentials are inserted", async () => {
//     await loginPage.loginBox.input("userName").setValue("standard_user");
//     await loginPage.loginBox.input("password").setValue("wrongpassword");
//     const classes =
//       await loginPage.loginBox.errorMessageContainer.getAttribute("class");

//     await loginPage.loginBox.submitBtn.click();

//     await expect(classes).toContain("error");
//   });

//   it("should redirect to inventory page after successful login", async () => {
//     await loginPage.loginBox.input("userName").setValue("standard_user");
//     await loginPage.loginBox.input("password").setValue("secret_sauce");
//     await loginPage.loginBox.submitBtn.click();

//     await expect(browser).toHaveUrl(/inventory\.html/);
//   });
// });

describe("Inventory Page", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.loginBox.input("userName").setValue("standard_user");
    await loginPage.loginBox.input("password").setValue("secret_sauce");
    await loginPage.loginBox.submitBtn.click();
  });

  it('UC-1: Prices should be sorted in ascending order when selecting option "Price (low to high)"', async () => {
    await inventoryPage.secondaryHeader.sortBy("low to high");
    const pricesArr = await inventoryPage.inventoryList.getPricesArr();
    const sortedPricesArr = [...pricesArr].sort((a, b) => a - b);
    expect(pricesArr).toEqual(sortedPricesArr);
  });

  describe("UC-2: Cart State Logic", () => {
    it("The cart badge should show 2, when adding two different items to the cart", async () => {
      const buttons = await inventoryPage.inventoryList.itemButtons;
      await buttons[0].click();
      await buttons[3].click();

      await expect(inventoryPage.primaryHeader.shoppingCartBadge).toHaveText(
        "2",
      );
    });

    it('The cart badge should update to 1, when removing one item via the "remove" item from the cart', async () => {
      const buttons = await inventoryPage.inventoryList.itemButtons;
      await buttons[0].click();
      await expect(inventoryPage.primaryHeader.shoppingCartBadge).toHaveText(
        "1",
      );
    });
  });
});
