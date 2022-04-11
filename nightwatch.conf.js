const chromedriver = require('chromedriver');
const seleniumserver = require('selenium-server');

module.exports = {
  src_folders : ["tests"], //tests is a folder in workspace which has the step definitions
  selenium: {
    start_process: true,
    server_path: seleniumserver.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },
  
  test_settings: {
    default: {  
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        args: ['--disable-popup-blocking', '--no-sandbox']
      }
    }
  }
};