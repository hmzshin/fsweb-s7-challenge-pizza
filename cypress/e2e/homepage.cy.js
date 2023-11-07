/// <reference types="cypress" />

describe("User Log in Validation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("go to orderpage", () => {
    cy.get('[data-cy="to-orderpage-button"]').click();
    cy.get('[data-cy="orderpage-h3"]').should(
      "have.text",
      "Position Absolute Acı Pizza"
    );
  });
});
