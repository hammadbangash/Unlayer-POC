import 'cypress-iframe';

export class editorPage {

visitEditor(){
    cy.visit("https://react-email-editor-demo.netlify.app/",{
        onBeforeLoad(win){
            cy.stub(win, 'prompt').as('exportPrompt');
        }
    });
}

getiFrame() {
    cy.frameLoaded('iframe[src="https://editor.unlayer.com/1.192.0/editor.html"]');
}

getTextAndClick() {
    cy.iframe().find('div[id="u_content_text_5"]').click({force:true})

}

getFontDropdown(){
    cy.iframe().find ('span:contains("Select...")').parent().click({force:true});
}

getAndClickFirstDropdownItem(){
    cy.iframe().find('div[class="dropdown-item"]').first().click({force:true});
  }

checkAlertMessage(){
    cy.on("window:alert",(x)=>{
        expect(x).to.contains("Output HTML has been logged in your developer console.");
      })
}

  clickExportHTMLButton(){
    cy.get("button:contains('Export HTML')").click();
  }
}


export const editorTemplate = new editorPage()