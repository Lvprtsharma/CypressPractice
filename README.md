# Cypress Automation Testing Project

This project contains automated tests using Cypress for various web applications, demonstrating different testing techniques and best practices.

## Test Suites Overview

### 1. Basic Tests
- `mytest.cy.js`: Basic title verification tests
- `CSSLocators.cy.js`: Demonstrates CSS selector usage
- `XPathLocators.cy.js`: Shows XPath selector implementation

### 2. Form Interaction Tests
- `Dropdowns.cy.js`: Tests different types of dropdown interactions
  - Select dropdowns
  - Custom dropdowns
  - Auto-suggest dropdowns
  - Dynamic dropdowns
- `RadioAndCheckBox.cy.js`: Tests radio button and checkbox interactions
  - Individual radio button selection
  - Multiple checkbox operations
  - Bulk checkbox operations

### 3. Assertion Tests
- `Explicit-assertion-demo.cy.js`: Demonstrates explicit assertions
  - BDD style assertions using expect
  - TDD style assertions using assert
- `Implicit-asssertion-demo.cy.js`: Shows implicit assertions
  - URL verifications
  - Title verifications
  - Element state checks
  - Multiple chained assertions

## Prerequisites

- Node.js (Latest LTS version recommended)
- NPM (Comes with Node.js)
- Git

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

### Run all tests
```bash
npx cypress run
```

### Open Cypress Test Runner
```bash
npx cypress open
```

## Test Applications Used

The test suites interact with the following applications:
- OrangeHRM Demo Site
- Automation Practice Website
- Wikipedia
- Google Search
- Dummy Ticket Website

## Project Structure

```
cypress/
├── e2e/                    # Test files
│   ├── 1-getting-started/  # Getting started examples
│   ├── 2-advanced-examples/# Advanced test examples
│   └── *.cy.js            # Custom test files
├── fixtures/               # Test data files
└── support/               # Support files (commands, utilities)
```

## Best Practices Demonstrated

1. **Locator Strategies**
   - CSS Selectors
   - XPath Selectors
   - Best practices for element selection

2. **Assertions**
   - Implicit assertions using should/and
   - Explicit assertions using expect/assert
   - Chaining multiple assertions

3. **Form Interactions**
   - Handling different types of dropdowns
   - Radio button and checkbox interactions
   - Dynamic element handling

4. **Code Organization**
   - Well-structured test files
   - Comprehensive comments
   - Clear test descriptions

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Maintenance

- Regular updates to dependencies
- Periodic review of test cases
- Documentation updates as needed
