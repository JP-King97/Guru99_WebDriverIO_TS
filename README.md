
# WebDriverIO Guru99 Test cases
This repository contains automated tests for the Flight Reservation and Travel Services website using WebDriverIO.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Test Structure](#test-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
These test cases aims to automate the testing process for the Flight Reservation and Travel Services website to ensure its functionality, usability, and reliability. By leveraging WebDriverIO with Typescript, we can efficiently execute tests Chrome browser, due to the importance and revelance of this browser to the average consumer of this website.

## Features
- Chrome Browser Testing: Tests are designed to run specifically on Chorome browser, ensuring relaibility and trust in this browser due to the level of importance it represents.
- Modular Test Structure: The test suite is organized into modular components, facilitating ease of maintenance and scalability.
- Configurable Parameters: Configuration files enable customization of test execution parameters such as browser type, test environment, and more.
- Comprehensive Reporting: WebDriverIO integrates with various reporting tools to provide detailed insights into test results and performance metrics, in this case the Allure-reporter is the reporter choose.

##Installation
To get started with running the tests locally, follow these steps:

1. Clone the repository:

    ```
    git clone https://github.com/JP-King97/Guru99_WebDriverIO_TS.git
    ```

2. Navigate to the project directory:

    ```
    cd Gurru99_WebDriverIO_TS
    ```

3. Install dependencies:

    ```
    npm install
    ```

## Usage

To execute the test suite, use the following command:

    npm run wdio

## Test Structure
The test suite is structured as follows:

![image](https://github.com/JP-King97/Guru99_WebDriverIO_TS/assets/102275322/e82191a0-cd33-4f9a-9194-f78b9ed0a7b8)


- /tests/specs: Contains individual test files, each focusing on specific functionalities or scenarios of the Flight Reservation and Travel Services website.
- /tests/pageobjects: Contains individual files, each represents the object model of each interactive page in the website.
- wdio.conf.js: Configuration file for WebDriverIO, specifying settings such as test environment, browser capabilities, and test framework options.
- package.json: npm package configuration file, listing dependencies and defining scripts for test execution and other tasks.
