import { test,expect } from "@playwright/test";
import { loginNPage } from "./Login.page";

test("valid Login",async ({page}) => {
    const login= new loginNPage (page);
    await login.Navigte_To_Login ("http://dev-testing.andalusiagroup.net:5003/");
    await login.perform_Login ("sohaem", "7790");
    await page.waitForURL (/.*dashboard/);
    await expect (page).toHaveURL(/.*dashboard/);
    await page.context().storageState({path:'./token.json'});
});