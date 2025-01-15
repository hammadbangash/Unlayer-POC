import 'cypress-iframe';

describe('Email Editor Test with iframe', () => {
  before(() => {
    // Visit the email editor page
    cy.visit('https://react-email-editor-demo.netlify.app/');
  });

  it('Modifies text properties and verifies exported HTML', () => {
    //cy.get('button[id="u_column_4"]', {timeout:8000}).click();

    cy.frameLoaded('iframe[src="https://editor.unlayer.com/1.192.0/editor.html"]');
    cy.iframe().find('button[id="u_column_4"]').click(); 

    /*cy.get('iframe[src="https://editor.unlayer.com/1.192.0/editor.html"]').then(($iframe)=>{
      const $body = $iframe.contents().find('body');

      //body.find('button[id="u_column_4"]').click();      
      cy.wrap($body.find('button[id="u_column_4"]')).click({force:true}, {timeout: 15000});
    })*/
  });
});