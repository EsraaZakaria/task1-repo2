import { FrameLocator, Locator, Page,expect } from '@playwright/test';

export  class vitalsigns { 

    readonly page: Page;
    readonly vitaltab: Locator;
    readonly addnewtempbutton : Locator;
    readonly tempvalue : Locator;
    readonly date_timevalue : Locator;
    readonly savebutton : Locator;
    readonly closebutton : Locator;
    readonly medical_frame: FrameLocator;
    readonly circle : Locator;

    constructor(page: Page) {
        this.page = page;
        this.vitaltab = page.locator("text=Vital Signs");
        this.medical_frame= page.frameLocator('#oldPortal');
        this.addnewtempbutton = this.medical_frame.locator('#AddVitalSign0');
        this.tempvalue = this.medical_frame.locator('#vitalValueId0');
        this.date_timevalue = page.locator ('[class="fa fa-exclamation mt4 ng-hide"]');
        this.savebutton = this.medical_frame.locator ('#SaveVitalRecordModal') ;
        this.closebutton = page.locator ('[class="btn btn-transparent pull-right ng-binding""]'); 
        this.circle=this.medical_frame.locator('circle');                                  
      } 
      //page.frameLocator('#oldPortal').locator('#AddVitalSign0');
      async navigate_To_vitalsigns(URL:string) {
        
        await this.page.goto(URL);

      }
    
      async Addtemp(tempVal:number){
        // Add Temperature
        await this.vitaltab.click();
        //await this.page.waitForURL('http://dev-testing.andalusiagroup.net:5003/physicianDesktop/');
      //  await this.page.waitForSelector("text=Add New", {state: "visible"});
      // await this.page.waitForSelector('iframe#oldPortal #AddVitalSign0', { timeout: 60000 });
      //        await expect(this.addnewtempbutton).toBeVisible();
      this.page.setDefaultTimeout(350000);
      this.addnewtempbutton.hover()
      //await this.page.hover(this.addnewtempbutton);
        await this.addnewtempbutton.click();
       // await this.date_timevalue.fill(" ")
        await this.tempvalue.fill ( "" + tempVal);
        await this.savebutton.click();
        
      }
      /*
      async Allsigns(tempVal: number, PRESSUREval:number ) {
        await this.Addtemp(tempVal);
      } */
      




}