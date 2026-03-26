const { pages } = require("../po");

describe("Inventory Page", () => {
  beforeEach(async () => {
    await pages("login").open();
    await pages("login").loginBox.input("userName").setValue("standard_user");
    await pages("login").loginBox.input("password").setValue("secret_sauce");
    await pages("login").loginBox.submitBtn.click();
  });

  it('UC-1: Prices should be sorted in ascending order when selecting option "Price (low to high)"', async () => {
    await pages("inventory").secondaryHeader.sortBy("low to high");
    const priceElements = await pages("inventory").inventoryList.priceElements;
    const pricesArr = await priceElements.map(async (el) => {
      const text = await el.getText();
      return parseFloat(text.replace("$", ""));
    });
    const sortedPricesArr = [...pricesArr].sort((a, b) => a - b);
    expect(pricesArr).toEqual(sortedPricesArr);
  });

  describe("UC-2: Cart State Logic", () => {
    it("The cart badge should show 2, when adding two different items to the cart", async () => {
      const buttons = await pages("inventory").inventoryList.itemButtons;
      await buttons[0].click();
      await buttons[3].click();

      await expect(
        pages("inventory").primaryHeader.shoppingCartBadge,
      ).toHaveText("2");
    });

    it('The cart badge should update to 1, when removing one item via the "remove" button from the cart', async () => {
      const buttons = await pages("inventory").inventoryList.itemButtons;
      await buttons[0].click();
      await expect(
        pages("inventory").primaryHeader.shoppingCartBadge,
      ).toHaveText("1");
    });
  });
});
