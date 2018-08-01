*** Settings ***

Library     SeleniumLibrary  timeout=30

Variables   ./variables.py

Documentation   Test suite should always import only one resource file.
...  Thus, ideally your resource files create a tree structure while
...  importing. This resource file should be the common root for them all where
...  project-wide keywords, imports, and other settings reside.
*** Keywords ***
Open Browser to  [Arguments]  ${location}
  Run Keyword If      '${BROWSER}' == 'HeadlessChrome'      Open Headless Chrome Browser to    ${location}
  ...     ELSE IF     '${BROWSER}' == 'HeadlessFirefox'     Open Headless Firefox Browser to    ${location}
  ...     ELSE        Open Graphical Browser to    ${location}

Open Headless Chrome Browser to  [Arguments]  ${location}
  ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys
  Call Method    ${chrome_options}    add_argument    test-type
  Call Method    ${chrome_options}    add_argument    --disable-extensions
  Call Method    ${chrome_options}    add_argument    --headless
  Call Method    ${chrome_options}    add_argument    --disable-gpu
  Call Method    ${chrome_options}    add_argument    --no-sandbox
  Create Webdriver    Chrome    chrome_options=${chrome_options}
  Set Window Size    1920    1080
  Go To    ${location}

Open Headless Firefox Browser to  [Arguments]  ${location}
  ${firefox options} =     Evaluate    sys.modules['selenium.webdriver'].firefox.webdriver.Options()    sys, selenium.webdriver
  Call Method    ${firefox options}   add_argument    -headless
  Create Webdriver    Firefox    firefox_options=${firefox options}
  # Set Window Size    2560    1440
  Go To    ${location}

Open Graphical Browser to  [Arguments]  ${location}
  Open Browser    ${location}    ${BROWSER}

Open browser and go to homepage
  Open Browser to   ${SERVER}
