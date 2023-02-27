import React from "react";
import List from "./List";

describe("<List />", () => {
  it("test", () => {
    cy.mount(<List initialItems={["Giovanni", "Miyuki"]} />);
    cy.injectAxe()
    cy.checkA11y()

  });
});


describe("<List />", () => {
  it("addItem", () => {

    cy.mount(<List initialItems={["Giovanni", "Miyuki"]} />);
    cy.get('[data-cy=input]').type('text');
    cy.get('[data-cy=addItem]').click()
    
  });
});
