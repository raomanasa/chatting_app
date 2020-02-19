describe("User can login", () => {
  beforeEach(() =>{
    //cy.server();
    cy.visit("/");
  });
  it("log in", () => {
    cy.get("#login").click ();
    cy.url().should("contain","login")
  })
})

