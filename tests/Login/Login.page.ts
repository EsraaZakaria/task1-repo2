import { Page,Locator } from "@playwright/test"

export class loginNPage {
    readonly page : Page;
    readonly userNameField : Locator ;
    readonly passWordField : Locator ;
    readonly loginBtn : Locator ;
    
     constructor(page:Page) {
        this.page=page;
        this.userNameField=page.locator('#userName');
        this.passWordField=page.locator('#password');
        this.loginBtn=page.locator('button:has-text(" Login ")');
        
    }
    async  Navigte_To_Login(url:string) {
        await this.page.goto(url);

    }
    async  perform_Login(userName:string,password:string) {
    await this.userNameField.click();
    await this.userNameField.fill(userName);
    await this.passWordField.click ();
    await this.passWordField.fill (password);
    await this.loginBtn.click ();    
    }
}