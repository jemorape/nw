const { browser } = require('nightwatch-api');
const { Given, Then, When } = require('@cucumber/cucumber');
 
Given(/^I open Google's search page$/, () => {
  return browser.url('http://google.com').waitForElementVisible('body', 1000);
});
 
Then(/^the title is "([^"]*)"$/, title => {
  return browser.assert.title(title);
});
 
Then(/^the Google search form exists$/, () => {
  return browser.assert.visible('input[name="q"]');
});
 
When('I search {string} in search form', function (string) {
    return  browser.setValue('input[type=text]', [string, browser .Keys.ENTER]); 
  });
 
Then('the search result matches {string}', function (string) {
    return  browser.assert.containsText('#main', string);
  });