import {expect, test} from '@playwright/test';
import  {vitalsigns} from './vitalsigns.page';
 
test.describe ("Add vital signs ",() =>{

     test(" Add Temperature",async ({page})=>{

        const vs=new vitalsigns(page);
        await vs.navigate_To_vitalsigns('http://dev-testing.andalusiagroup.net:5003/physicianDesktop/');
      // click on search field and  fill the patient code 
         await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('00128138ALX'); // 00128130alx
     // click on search icon 
        await page.locator('[class="fa fa-search search-icon"]').click();
     //  select patient
         await page.getByText('25 Y').click(); //29
     // capture patient
         await expect(page.locator('button:has-text("Capture Patient")')).toBeVisible();
         await page.getByRole('button', { name: 'Capture Patient' }).click();
         await vs.Addtemp (37);
        // await vs.circle.hover();
         //await expect (vs.circle.getByRole('img')).toBeVisible ();
        //liukk
     });    
       
          
test ("Should navigate to the portal and open vital signs  moudle ",async ({page})=>{
await page .goto ('http://dev-testing.andalusiagroup.net:5003/physicianDesktop');
await page.waitForURL('http://dev-testing.andalusiagroup.net:5003/physicianDesktop');
await page.getByText("Vital Signs").click ();
//await page.locator('[class="pr-2 start-nav pl-1"]').click();

});


});

 
























