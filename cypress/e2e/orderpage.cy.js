/// <reference types="cypress" />

/// <reference types="cypress" />

describe("Pizza orderpage price calculation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="to-orderpage-button"]').click();
  });

  it("calculate the total price correctly - 1", () => {
    cy.get('[data-cy="small"]').click();
    cy.get('[data-cy="select-paste"]').select("thin");
    cy.get('[data-cy="Ananas"]').click();
    cy.get('[data-cy="Biber"]').click();
    cy.get('[data-cy="Pepperoni"]').click();
    cy.get('[data-cy="Sosis"]').click();
    cy.get('[data-cy="increase-piece"]').click();
    cy.get('[data-cy="increase-piece"]').click();
    cy.get('[data-cy="decrease-piece"]').click();
    cy.get('[data-cy="total-price"]').should("have.text", "178.51₺");
  });
  it("calculate the total price correctly - 2", () => {
    cy.get('[data-cy="medium"]').click();
    cy.get('[data-cy="select-paste"]').select("thick");
    cy.get('[data-cy="Ananas"]').click();
    cy.get('[data-cy="Soğan"]').click();
    cy.get('[data-cy="Sosis"]').click();
    cy.get('[data-cy="Kanada Jambonu"]').click();
    cy.get('[data-cy="Kabak"]').click();
    cy.get('[data-cy="Mısır"]').click();
    cy.get('[data-cy="total-price"]').should("have.text", "124.05₺");
  });
  it("calculate the total price correctly - 3", () => {
    cy.get('[data-cy="large"]').click();
    cy.get('[data-cy="select-paste"]').select("normal");
    cy.get('[data-cy="Soğan"]').click();
    cy.get('[data-cy="Tavuk Izgara"]').click();
    cy.get('[data-cy="Kanada Jambonu"]').click();
    cy.get('[data-cy="Kabak"]').click();
    cy.get('[data-cy="Mısır"]').click();
    cy.get('[data-cy="total-price"]').should("have.text", "119.05₺");
  });
  it("calculate the total price correctly - 4", () => {
    cy.get('[data-cy="select-paste"]').select("thick");
    cy.get('[data-cy="Pepperoni"]').click();
    cy.get('[data-cy="Sosis"]').click();
    cy.get('[data-cy="Kanada Jambonu"]').click();
    cy.get('[data-cy="Soğan"]').click();
    cy.get('[data-cy="Sarımsak"]').click();
    cy.get('[data-cy="Biber"]').click();
    cy.get('[data-cy="increase-piece"]').click();
    cy.get('[data-cy="increase-piece"]').click();
    cy.get('[data-cy="increase-piece"]').click();
    cy.get('[data-cy="increase-piece"]').click();
    cy.get('[data-cy="decrease-piece"]').click();
    cy.get('[data-cy="increase-piece"]').click();
    cy.get('[data-cy="increase-piece"]').click();
    cy.get('[data-cy="decrease-piece"]').click();
    cy.get('[data-cy="total-price"]').should("have.text", "620.25₺");
  });
});

describe("Pizza orderpage form validation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="to-orderpage-button"]').click();
  });

  it("submit order - 1", () => {
    cy.get('[data-cy="small"]').click();
    cy.get('[data-cy="select-paste"]').select("thin");
    cy.get('[data-cy="Ananas"]').click();
    cy.get('[data-cy="Biber"]').click();
    cy.get('[data-cy="Pepperoni"]').click();
    cy.get('[data-cy="Sosis"]').click();
    cy.get('[data-cy="increase-piece"]').click();
    cy.get('[data-cy="comment-input"]').type("Lorem ipsum dolor sit amet.");
    cy.get('[data-cy="submit-button"]')
      .click()
      .then(() => {
        cy.get('[data-cy="success-page"]').should(
          "have.text",
          "TEBRİKLER! SİPARİŞİNİZ ALINDI!"
        );
      });
  });
  it("submit order - 2", () => {
    cy.get('[data-cy="medium"]').click();
    cy.get('[data-cy="select-paste"]').select("thick");
    cy.get('[data-cy="Ananas"]').click();
    cy.get('[data-cy="Soğan"]').click();
    cy.get('[data-cy="Sosis"]').click();
    cy.get('[data-cy="Kanada Jambonu"]').click();
    cy.get('[data-cy="Kabak"]').click();
    cy.get('[data-cy="Mısır"]').click();
    cy.get('[data-cy="submit-button"]')
      .click()
      .then(() => {
        cy.get('[data-cy="success-page"]').should(
          "have.text",
          "TEBRİKLER! SİPARİŞİNİZ ALINDI!"
        );
      });
  });
  it("submit order - 3", () => {
    cy.get('[data-cy="large"]').click();
    cy.get('[data-cy="select-paste"]').select("normal");
    cy.get('[data-cy="Soğan"]').click();
    cy.get('[data-cy="Mısır"]').click();
    cy.get('[data-cy="comment-input"]').type("Lorem ipsum dolor sit amet.");
    cy.get('[data-cy="submit-button"]')
      .click()
      .then(() => {
        cy.get('[data-cy="ingredients-error"]').should(
          "have.text",
          "En az 4 tane malzeme seçiniz"
        );
      });
  });
  it("submit order - 4", () => {
    cy.get('[data-cy="select-paste"]').select("thick");
    cy.get('[data-cy="Pepperoni"]').click();
    cy.get('[data-cy="Sosis"]').click();
    cy.get('[data-cy="Kanada Jambonu"]').click();
    cy.get('[data-cy="Tavuk Izgara"]').click();
    cy.get('[data-cy="Soğan"]').click();
    cy.get('[data-cy="Domates"]').click();
    cy.get('[data-cy="Sarımsak"]').click();
    cy.get('[data-cy="Biber"]').click();
    cy.get('[data-cy="Jalepeno"]').click();
    cy.get('[data-cy="Kabak"]').click();
    cy.get('[data-cy="Mısır"]').click();
    cy.get('[data-cy="Ananas"]').click();
    cy.get('[data-cy="submit-button"]')
      .click()
      .then(() => {
        cy.wait(2000);
        cy.get('[data-cy="ingredients-error"]').should(
          "have.text",
          "En fazla 10 tane malzeme seçebilirsiniz"
        );
        cy.get('[data-cy="orderpage-h3"]').should(
          "have.text",
          "Position Absolute Acı Pizza"
        );
      });
  });
  it("submit order - 5", () => {
    cy.get('[data-cy="Pepperoni"]').click();
    cy.get('[data-cy="Domates"]').click();
    cy.get('[data-cy="Sarımsak"]').click();
    cy.get('[data-cy="Mısır"]').click();
    cy.get('[data-cy="comment-input"]').type("Lorem ipsum dolor sit amet.");
    cy.get('[data-cy="submit-button"]')
      .click()
      .then(() => {
        cy.wait(2000);
        cy.get('[data-cy="paste-error"]').should(
          "have.text",
          "Lütfen hamur tipini seçiniz"
        );
        cy.get('[data-cy="orderpage-h3"]').should(
          "have.text",
          "Position Absolute Acı Pizza"
        );
      });
  });
});
