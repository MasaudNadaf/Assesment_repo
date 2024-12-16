const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumberReports',
	reportPath: 'cypress/cucumberReports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local Machine',
        platform: {
            name: 'Windows',
            version: '11.00'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Magento Project'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: ''},
            {label: 'Execution Start Time', value: 'Dec 12th 2024'},
            {label: 'Execution End Time', value: 'Dec 12th 2024'}
        ]
    }
});