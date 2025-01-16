import {editorTemplate} from '../support/pageObjects/editorPage.js'

describe('Email Editor Test with iframe', () => {
  before(() => {
    // Visit the email editor page

    editorTemplate.visitEditor();
  });

  it('Modifies text properties and verifies exported HTML', () => {
   
    editorTemplate.getiFrame()
  
    editorTemplate.getTextAndClick();

    editorTemplate.getFontDropdown();

    editorTemplate.getAndClickFirstDropdownItem();

    editorTemplate.clickExportHTMLButton();

    editorTemplate.checkAlertMessage();
  });
});