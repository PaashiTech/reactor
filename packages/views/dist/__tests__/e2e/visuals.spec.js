var import_test = require("@playwright/test");
import_test.test.describe("Visuals", () => {
  (0, import_test.test)('Title reads "Humble Dialog Box"', async ({ page }) => {
    await page.goto("/"), await (0, import_test.expect)(page).toHaveTitle("Humble Dialog Box");
  }), (0, import_test.test)('Heading reads "Login"', async ({ page }) => {
    await page.goto("/"), await (0, import_test.expect)(page.getByRole("heading", { name: "Reactor" })).toBeVisible();
  });
});
//# sourceMappingURL=visuals.spec.js.map
