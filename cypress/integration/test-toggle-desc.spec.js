/* eslint-disable */

describe("Answer can be open", () => {
  it("First answer is not visible by default, and visible after click", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    //first answer is not visible by default
    cy.get("[data-qa=faq__desc]").first().should("not.be.visible");

    // click on a first question
    cy.get("[data-qa=faq__question-button]").first().click();

    //answer should be visible and have a class show-description
    cy.get("[data-qa=faq__desc]")
      .first()
      .should("have.class", "show-description");
    cy.get("[data-qa=faq__desc]").first().should("be.visible");

    //click on a first question again
    cy.get("[data-qa=faq__question-button]").first().click();

    //answer should not be visible and do not have a class show-description
    cy.get("[data-qa=faq__desc]")
      .first()
      .should("not.have.class", "show-description");
    cy.get("[data-qa=faq__desc]").first().should("not.be.visible");
  });
});
