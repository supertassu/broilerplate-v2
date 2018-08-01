*** Settings ***

Resource   ${PROJECTROOT}${/}resources${/}common.robot

Test Setup          Open browser and go to homepage
Test Teardown       Close All Browsers

*** Test cases ***

Home page should open
	Wait Until Page Contains    Hello React
