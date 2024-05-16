import { defineConfig, devices } from '@playwright/test'
import { testPlanFilter } from "allure-playwright/dist/testplan";
//import type { TestOptions } from "./utils/test-options"


export default defineConfig({

   // Below configuration is used to run test cases in parellel mode & set timeouts for test cases on project level
  testDir: './tests',
  workers: 1,
  fullyParallel: true,      
  globalTimeout: 200000,
  timeout: 80000,
  expect: {
    
    timeout: 60000

  },

  // Below configuration is used to generate html report in my report folder
  reporter: 
  
    [['html', { outputFolder: 'my-report' }],
    
  ],


  // Below configuration is used to capture videos/screenshot & traces after execution of test cases
  use: {
    baseURL: 'https://dev.gemagility.com',
    headless: false,
    actionTimeout: 60000,
    navigationTimeout: 60000,
    video: "on",
    screenshot: "only-on-failure",
    trace:"on"
  },


  // Below configuration is used to perform test cases on different browser & Mobile Testing
  
  projects: [

    {
      name: 'testing_chrome',
      use: { ...devices['Desktop Chrome'],
      baseURL: 'https://dev.gemagility.com'
      },
    },

    {
      name: 'testing_firefox',
      use: { ...devices['Desktop Firefox'],
      baseURL: 'https://dev.gemagility.com'
      }, 
    },

    {
      name: 'testing_safari',
      use: { ...devices["Desktop Safari"],
      baseURL: 'https://dev.gemagility.com'
      }, 
    },

    {
      name: 'Mobile testing',
      use: { ...devices['iPhone 14 Pro Max'],
      baseURL: 'https://dev.gemagility.com'
      },
    },



  ],

});
