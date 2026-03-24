const LoginPage = require("../po/pages/login.page");

const loginPage = new LoginPage();
describe("Login Page", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it("check page title", async () => {
    await expect(browser).toHaveTitle("Swag Labs");
  });

  it("The login page should show an error when incorrect credentials are inserted", async () => {
    await loginPage.loginBox.input("userName").setValue("standard_user");
    await loginPage.loginBox.input("password").setValue("wrongpassword");
    const classes =
      await loginPage.loginBox.errorMessageContainer.getAttribute("class");

    await loginPage.loginBox.submitBtn.click();

    await expect(classes).toContain("error");
  });

  it("should redirect to inventory page after successful login", async () => {
    await loginPage.loginBox.input("userName").setValue("standard_user");
    await loginPage.loginBox.input("password").setValue("secret_sauce");
    await loginPage.loginBox.submitBtn.click();

    await expect(browser).toHaveUrl(/inventory\.html/);
  });
});
