import {Locator, Page} from "@playwright/test"
import { HelperBase } from "../utils/helperBase"


export class SelectOrgansationPage extends HelperBase{ 
    
    readonly testorganisation  : Locator
   

    constructor(page: Page){
        super(page) 

        this.testorganisation  = page.getByText('Test Organisation\'s')

    }

    async selectTestOrganisation(){

        await this.page.waitForTimeout(2000)
        await this.testorganisation.click()
        await this.page.waitForTimeout(3000)
        
    }
}


