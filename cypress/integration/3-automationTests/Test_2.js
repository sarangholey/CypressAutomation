describe("Orange HRM", function() {

    it("Verify URL", function(){
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.url().should("include","zero.webappsecurity")
        cy.url().should("eq","http://zero.webappsecurity.com/login.html")
    })

    it("Verify Title", function() {
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.title().should("include","Zero")
        cy.title().should("eq","Zero - Log in")
    })

    it("Verify Login and logout", function() {
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.get("#user_login").type("username").should("have.value","username")
        cy.get("#user_password").type("password").should("have.value","password")
        cy.get(".btn-primary").click()
        cy.url().should("include","zero.webappsecurity.com/bank/account-summary")
        cy.title().should("eq","Zero - Account Summary")
        cy.log("User Logged in")
        cy.get(".icon-user").click()
        cy.get("#logout_link").click()
        cy.title().should("eq","Zero - Personal Banking - Loans - Credit Cards")
        cy.log("User Logged out")
    })
})