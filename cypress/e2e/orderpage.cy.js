/// <reference types="cypress" />

/// <reference types="cypress" />

describe("User Log in Validation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(".cy-button").click();
  });

  it("calculate the total price correctly", () => {
    cy.get('[data-cy="small"]').click();
    cy.get('[data-cy="select-paste"]').select("thin");
    cy.get('[data-cy="Ananas"]').click();
    cy.get('[data-cy="Biber"]').click();
    cy.get('[data-cy="Pepperoni"]').click();
    cy.get('[data-cy="Sosis"]').click();
    cy.get('[data-cy="increase-piece"]').click();
    cy.get('[data-cy="total-price"]').should("have.text", 158.51);
  });
});
