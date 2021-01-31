describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  })
  it("goes through the full roadmap of the app", () => {
    cy.viewport(1920, 1080);
    cy.visit("/")
      // Check actual state
      .window().its("store").invoke("getState")
      .then((state) => {
        expect(state.earnedCash).to.be.a("number").and.equal(0)
        expect(state.cash).to.be.a("number").and.equal(0)
      })

      // Check cash, after paying $5
      .get(".coin-btn").last().click()
      .window().its("store").invoke("getState")
      .then((state) => expect(state.cash).equal(5))

      // Buy the cookie and check (earned)Cash amount
      .get(".items-unit").first().click()
      .window().its("store").invoke("getState")
      .then((state) => {
        expect(state.cash).to.be.a("number").and.equal(4.9);
        expect(state.earnedCash).to.be.a("number").and.equal(0.1);
      })

      // Get money back
      .get(".back-btn").click()
      .window().its("store").invoke("getState")
      .then((state) => expect(state.cash).to.be.a("number").and.equal(0))

      // Restock items
      .get(".machine__title a").click()
      .get(".card-btn").click()
      .window().its("store").invoke("getState")
      .then((state) => {
        expect(state.earnedCash).to.be.a("number").and.equal(0)
        expect(state.items[0].quantity).to.be.a("number").and.equal(3)
      })
  })
})
