import { test,expect} from '@playwright/test';
test.describe("Login test cases",()=>{
test("should have the correct title", async ({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com",)
    await expect(page).toHaveTitle("QAcart Todo App - Login page");
});
test("should have the correct URL", async ({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com/login",)
    await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/login");
})
test("Header should be visible by text", async ({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com",)
    const title = page.locator("text=LOGIN TO APPLICATION");
    await expect(title).toBeVisible();
})
test("Should be able to fill the email", async ({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com/login",)
    const emailField = page.locator("#email");
    await emailField.fill("hatem@example.com")
    await expect(emailField).toHaveValue("hatem@example.com")
})
test("Should be able to fill the password", async ({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com/login",)
    const passwordField = page.locator('[data-testid="password"]');
    await passwordField.fill("123456")
    await expect(passwordField).toHaveValue("123456")
})
test("Should be able to click the button", async ({page}) => {
    await page.goto("https://qacart-todo.herokuapp.com/login",)
    const emailField = page.locator("#email");
    await emailField.fill("hatem@example.com")
    const passwordField = page.locator('[data-testid="password"]');
    await passwordField.fill("123456")
    await page.getByTestId('submit').click()
    await expect(page.getByText('Please Fill a correct Password')).toHaveText("Please Fill a correct Password")
})})