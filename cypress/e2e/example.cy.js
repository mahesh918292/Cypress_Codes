import 'cypress-file-upload';

describe('Tests', () => {

  // Handle known cross-origin script errors without failing the test
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('cross origin script')) {
      return false; // ignore this error and continue
    }
    return true; // let other errors fail the test
  });

  // Forms

  it('Page', () => {
    // Visit the main demoqa homepage
    cy.visit('https://demoqa.com/');

    // Click the first card (Elements section)
    cy.get('div[class="card mt-4 top-card"]').eq(0).click();

    // Click the first item in the sidebar menu (Text Box)
    cy.get('li[id="item-0"]').eq(0).click();

    // Fill out the form fields
    cy.get('#userName').type('Mahesh');
    cy.get('#userEmail').type('Mahesh@gmail.com');
    cy.get('#currentAddress').type('xyz');
    cy.get('#permanentAddress').type('xyz');

    // Submit the form
    cy.get('#submit').click();

    // Log the output displayed after submission
    cy.get('p[id="name"]').then(($obj) => {
      console.log($obj.text()); // Logs the name field
    });
    cy.get('p[id="email"]').then(($obj) => {
      console.log($obj.text()); // Logs the email field
    });
    cy.get('p[id="currentAddress"]').then(($obj) => {
      console.log($obj.text()); // Logs the current address field
    });
    cy.get('p[id="permanentAddress"]').then(($obj) => {
      console.log($obj.text()); // Logs the permanent address field
    });
  });

  // Checkboxes


  it('Checking', () => {
    // Visit the demoqa homepage
    cy.visit('https://demoqa.com/');

    // Click the first card (Elements section)
    cy.get('div[class="card mt-4 top-card"]').eq(0).click();

    // Click on the "Check Box" item in the sidebar menu
    cy.get('li[id="item-1"]').eq(0).click();

    // Click the checkbox for 'Home'
    cy.get('label[for="tree-node-home"]').click();

    // Click it again (maybe toggling it off or testing behavior)
    cy.get('label[for="tree-node-home"]').click();
  });
  it('Alerts',()=>{
    cy.visit('https://demoqa.com/buttons')
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#doubleClickMessage').then(($el)=>{
      if($el.text()=="You have done a double click")
        alert("Success")
      else 
        alert('Failure')
    })
  })
  it('FIles Upload',()=>{
    cy.visit('https://demoqa.com/upload-download')
    cy.get('#uploadFile').attachFile('1.html')
   

  })
  
});
