import {Locator, Page, expect} from "@playwright/test" 
import {faker} from '@faker-js/faker'
import { HelperBase } from "../utils/helperBase"
const testData= JSON.parse(JSON.stringify(require("../utils/testData.json")))
const dataSet= JSON.parse(JSON.stringify(require("../utils/credential.json")))

export class CreateNetworkPage extends HelperBase{  
    
        readonly add_new_network           : Locator
        readonly administrator             : Locator
        readonly networks                  : Locator
        readonly name                      : Locator
        readonly device_time               : Locator
        readonly unit_rate                 : Locator
        readonly type                      : Locator
        readonly region                    : Locator
        readonly region_search_box         : Locator
        readonly type_search_box           : Locator
        readonly save_exit_btn             : Locator
        readonly alert_check_box           : Locator
        readonly selected_list             : Locator
        readonly type_list                 : Locator
        readonly region_list               : Locator
        readonly search_network            : Locator
        readonly network_name              : Locator
        readonly edit_network              : Locator
        readonly ok_btn                    : Locator
        readonly update_btn                : Locator
        readonly active_sensor_btn         : Locator
        readonly report_list               : Locator
        readonly kpi_list                  : Locator
        readonly delete_btn                : Locator
        readonly network_page              : Locator
        readonly network_upt_toast         : Locator
        readonly active_sen_rpt            : Locator
        readonly all_data_point            : Locator
        readonly active_sensors            : Locator
        readonly boiler_efficiency         : Locator
        readonly add_active_list_btn       : Locator
        readonly add_bypass_list_btn       : Locator
        readonly degree_day_analysis_rpt   : Locator
        readonly enter_permanant_pwd       : Locator
        readonly permanant_delete_btn      : Locator
        readonly restore_network_btn       : Locator
        readonly delete_network            : Locator
        readonly arrowback                 : Locator


    
    constructor(page: Page){
        super(page)
       
       
        this.add_new_network               = page.getByRole('button', { name: 'Add New Network' })
        this.administrator                 = page.getByRole('button', { name: 'Administrator' })
        this.networks                      = page.getByRole('button', { name: ' Networks' })
        this.name                          = page.getByLabel('Name')
        this.unit_rate                     = page.getByLabel('Unit Rate')
        this.device_time                   = page.getByLabel('Device time (in mins)')
        this.type                          = page.locator('div').filter({ hasText: /^empty$/ }).first()
        this.type_search_box               = page.locator('p-overlay').filter({ hasText: 'Heat NetworkLeague' }).getByRole('textbox')
        this.type_list                     = page.getByText('Heat Network')
        this.region                        = page.locator('div').filter({ hasText: /^empty$/ })
        this.region_search_box             = page.locator('p-overlay').filter({ hasText: 'City and Borough of' }).getByRole('textbox')
        this.region_list                   = page.getByText('City and Borough of Birmingham')
        this.alert_check_box               = page.getByText('Do you want NULL alerts')
        this.selected_list                 = page.getByText('Add to selected List Active')
        this.search_network                = page.getByPlaceholder("Search")
        this.network_name                  = page.getByRole('cell', { name: '  ' }).locator('i').nth(2)
        this.edit_network                  = page.getByRole('cell', { name: '  ' }).locator('i').nth(1)
        this.ok_btn                        = page.getByRole('button', { name: 'Ok' })
        this.active_sensor_btn             = page.locator('record-picker').first()
        this.report_list                   = page.getByRole('list').nth(1)
        this.save_exit_btn                 = page.getByRole('button', { name: 'Save and Exit' })
        this.update_btn                    = page.getByRole('button', { name: 'Update' })
        this.delete_btn                    = page.getByRole('button', { name: 'Delete Anyway' })
        this.network_page                  = page.locator('.demo-contents')
        this.network_upt_toast             = page.getByText('Network Updated Successfully!')
        this.kpi_list                      = page.getByRole('list').nth(3)
        this.active_sen_rpt                = page.getByText('Active Sensor Report')
        this.all_data_point                = page.getByText('All Data Point')
        this.active_sensors                = page.getByText('Active Sensors')
        this.boiler_efficiency             = page.getByText('Boiler Efficiency').nth(1)
        this.add_active_list_btn           = page.locator('app-dual-list').filter({ hasText: 'Add to selected List Active' }).locator('button[name="removeBtn"]')
        this.add_bypass_list_btn           = page.locator('app-dual-list').filter({ hasText: 'Add to selected List Bypass' }).locator('button[name="removeBtn"]')
        this.degree_day_analysis_rpt       = page.getByText('Degree Day Analysis Report')
        this.enter_permanant_pwd           = page.getByLabel('Password')
        this.permanant_delete_btn          = page.getByRole('button', { name: 'Delete' })
        this.restore_network_btn           = page.getByText('Restore Network')
        this.delete_network                = page.getByRole('row', { name: 'AutoUpdatedNetworkTest Heat' }).locator('i').nth(1)
        this.arrowback                     = page.getByText('arrow_back')

    }

    

    async clickAddNewNetwork(){

        await this.add_new_network.click()  
        const add_network_page= this.network_page
        await expect(add_network_page).toHaveScreenshot('Screenshot2.png')

    }

    async selectAdministrator(){   

        await this.administrator.click() 

    }

    async selectNetwork(){
        
        await this.networks.click() 
         
    }

    async fillAddNewNetworkForm(){

        const randomName= faker.person.firstName()
        let randomunitrate=  faker.number.int(100)
        let unit_rate = randomunitrate.toString()
        let randomdevicetime= faker.number.int(100)
        let randomdevice_time = randomdevicetime.toString()
        await this.name.fill(randomName)
        await this.unit_rate.fill(unit_rate)  
        await this.device_time.fill(randomdevice_time)

    }

    async createNewNetowrk(){
        
        await this.administrator.click()  
        await this.networks.click() 
        await this.add_new_network.click()  
        const randomName= faker.person.firstName()
        await this.name.fill(randomName + 'TestNetwork')
        let randomunitrate=  faker.number.int(100)
        let unit_rate = randomunitrate.toString()
        await this.unit_rate.fill(unit_rate)
        let randomdevicetime= faker.number.int(100)
        let randomdevice_time = randomdevicetime.toString()
        await this.device_time.fill(randomdevice_time)
        await this.type.click()
        await this.type_search_box .fill(testData.type)
        await this.type_list.click()
        await this.alert_check_box.click()
        await this.region.click()
        await this.region_search_box.fill(testData.region)
        await this.region_list.click()
        await this.active_sen_rpt.dragTo(this.report_list)
        await this.all_data_point.last().dragTo(this.report_list)
        await this.active_sensors.dragTo(this.kpi_list)
        await this.boiler_efficiency.dragTo(this.kpi_list)
        await this.save_exit_btn.click()
   
    }

    async editNetwork(){

        await this.search_network.fill('TestNetwork')
        await this.edit_network.click()
        await this.alert_check_box.click()           
        let randomunitrate=  faker.number.int(100)
        let unit_rate = randomunitrate.toString()
        await this.unit_rate.fill(unit_rate)
        let randomdevicetime= faker.number.int(100)
        let randomdevice_time = randomdevicetime.toString()
        await this.device_time.fill(randomdevice_time)
        const randomName= faker.person.firstName()
        await this.name.fill(randomName + testData.networkupdate)
        await this.all_data_point.click()
        await this.degree_day_analysis_rpt.click()
        await this.add_active_list_btn.click()  
        await this.active_sensors.click()
        await this.boiler_efficiency.click()
        await this.add_bypass_list_btn.click()
        await this.update_btn.click()
        await expect(this.network_upt_toast).toBeVisible()
        await this.search_network.fill(testData.networkupdate)
        
    }


    async deleteNetwork(){

        await this.search_network.fill(testData.networkupdate)
        await this.network_name.click()
        await this.ok_btn.click()
        await this.search_network.fill(testData.networkupdate)
        await this.restore_network_btn.click()
        await this.search_network.fill(testData.networkupdate)
        await this.delete_network.click()
        await this.enter_permanant_pwd.fill(dataSet.password)
        await this.permanant_delete_btn .click()
        await this.arrowback.click()
        await this.search_network.fill(testData.networkupdate) 
    }



}






