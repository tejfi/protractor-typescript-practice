exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine', //Type of Framework used 
    directConnect: false,
    specs: ['../config/spec.js'], //Name of the Specfile 
    onPrepare: () => {
        browser.manage().window().maximize();

        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
        });

    },


};