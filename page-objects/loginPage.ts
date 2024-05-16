import {Locator, Page} from "@playwright/test"
import { HelperBase } from "../utils/helperBase"
const dataSet= JSON.parse(JSON.stringify(require("../utils/credential.json")))


export class LoginPage extends HelperBase{ 
    
        readonly enterEmail        : Locator
        readonly enterPassword     : Locator
        readonly submitButton      : Locator

    constructor(page: Page){

        super(page) 
        this.enterEmail        = page.getByPlaceholder('Enter email')
        this.enterPassword     = page.getByPlaceholder('Enter password')
        this.submitButton      = page.getByRole('button', { name: 'Log In' })

    }
    
    async navigateToLoginPage() {
        
        await  this.page.goto("/")
    }

    async login(){

        await this.enterEmail.fill(dataSet.email)
        await this.enterPassword.fill(dataSet.password)
        await this.submitButton.click()
        await this.waitForNumberOfSeconds(2)
          

    }

    async loginInvalidCredential(){

        await this.enterEmail.fill(dataSet.invalidemail)
        await this.enterPassword.fill(dataSet.inavlidpassword)
        await this.submitButton.click()
        await this.waitForNumberOfSeconds(2)
        

  }




  
}


