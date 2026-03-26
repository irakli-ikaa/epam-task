const { pages } = require("../po");
const { cartItems } = require("./data");

describe("Inventory Page", () => {
  before(async () => {
    await pages("login").open();
    await pages("login").loginBox.input("userName").setValue("standard_user");
    await pages("login").loginBox.input("password").setValue("secret_sauce");
    await pages("login").loginBox.submitBtn.click();
  });

  it('UC-1: Prices should be sorted in ascending order when selecting option "Price (low to high)"', async () => {
    await pages(
      "inventory",
    ).secondaryHeader.sortingSelection.selectByVisibleText(
      "Price (low to high)",
    );
    const priceElements = pages("inventory").inventoryList.priceElements;

    const pricesArr = await priceElements.map(async (el) => {
      const text = await el.getText();
      return parseFloat(text.replace("$", ""));
    });
    const sortedPricesArr = [...pricesArr].sort((a, b) => a - b);

    expect(pricesArr).toEqual(sortedPricesArr);
  });

  describe("UC-2: Cart State Logic", () => {
    beforeEach(async () => {
      await pages("inventory").primaryHeader.menuBtn.click();
      await pages("inventory").sideBar.rootEl.waitForDisplayed();

      await pages("inventory").sideBar.resetStateBtn.click();
      await pages("inventory").sideBar.closeSidebarBtn.click();

      await pages("inventory").sideBar.rootEl.waitForDisplayed({
        reverse: true,
        timeout: 5000,
      });
    });

    cartItems.forEach(([item1, item2]) => {
      it(`The cart badge should show "2", when adding two different items to the cart ("${item1}" and "${item2}"),
        and after removing one item (${item1}) the badge should show "1"`, async () => {
        await pages("inventory").inventoryList.getBtnOf(item1).click();
        await pages("inventory").inventoryList.getBtnOf(item2).click();
        await expect(
          pages("inventory").primaryHeader.shoppingCartBadge,
        ).toHaveText("2");

        await pages("inventory").inventoryList.getBtnOf(item1).click();
        await expect(
          pages("inventory").primaryHeader.shoppingCartBadge,
        ).toHaveText("1");
      });
    });
  });
});
