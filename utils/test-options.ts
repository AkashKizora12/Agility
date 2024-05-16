// import {test as base} from '@playwright/test'
// import { LoginPage} from '../page-objects/loginPage'
// import { CreateNetworkPage } from '../page-objects/createNetworkPage'
// import { SelectOrgansationPage} from '../page-objects/selectOrganisationPage'




// export type TestOptions = {

//     // agilityDevURL: string
//     // formsPage    : string
//     CreatePage   : string

// }

// export const test = base.extend<TestOptions>({

//     // agilityDevURL: ['', {option:true}],

//     // formsPage: async({page}, use)=>{

//     //     await page.goto("https://letcode.in/");
//     //     await page.getByText('New Course!').click()
//     //     await page.getByRole('link', { name: 'Enroll to the free course' }).first().click()
//     //     await use('')

//     // },


//     CreatePage: async({page}, use)=>{

//         const lp = new LoginPage(page)
//         const nt = new CreateNetworkPage(page)
//         const so = new SelectOrgansationPage(page)
//         await lp.navigateToLoginPage()
//         await lp.login()
//         await so.selectTestOrganisation()
//         await nt.createNewNetowrk()

//     },
    

// })