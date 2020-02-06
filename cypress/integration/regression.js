describe('Grommet regression test', function(){
   it('Visits the main page', function(){
     cy.viewport('macbook-15');
     cy.visit('https://www.dev.thegrommet.com')
   })
   it('Should click the second product being discovered', function(){
     cy.get('[class="tile-container-3 tile-container-2-mobile"]').within(() =>{
        cy.get('a').eq(1).click()
     })
   })
   it('Should select a product', ()=> {
     cy.get('[class="p-t-l p-b-s p-t-m-phone p-b-0-phone"]').within(() =>{
        cy.get('a').eq(1).click()
     })
     cy.url().should('include','products')
   });
   it('Should increment the product amount to 3 and add to cart', ()=> {
     cy.wait(3000)
     //cy.get('.quantity-dropdown').select('3')
     cy.get('[formaction="cart.add"]').click()
     //cy.get('.button.btn').click()
   });

})
