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
        cy.xpath("//input[@id='user_login']").type("username").should("have.value","username")
        //cy.get("#user_login").type("username").should("have.value","username")
        cy.xpath("//input[@id='user_password']").type("password").should("have.value","password")
        //cy.get("#user_password").type("password").should("have.value","password")
        cy.xpath("//input[@name='submit']").click()
        //cy.get(".btn-primary").click()
        cy.url().should("include","zero.webappsecurity.com/bank/account-summary")
        cy.title().should("eq","Zero - Account Summary")
        cy.log("User Logged in")
        cy.xpath("//i[@class='icon-user']").click()
        //cy.get(".icon-user").click()
        cy.xpath("//a[@id='logout_link']").click()
        //cy.get("#logout_link").click()
        cy.title().should("eq","Zero - Personal Banking - Loans - Credit Cards")
        cy.log("User Logged out")
    })
})

// To Use xpath
// Run command -> npm install -D cypress-xpath
// The next dependency got added in your package.json file
// -> "cypress-xpath": "^1.6.2"
// After this add below line in index.js file under support folder
// -> require('cypress-xpath')