describe('Grommet regression test', function(){
   it('Visits the main page', function(){
     cy.viewport('macbook-15');
     cy.visit('https://www.dev.thegrommet.com')
   })
   it('Should click the second product being discovered', function(){
     cy.contains('Buzzee Wraps').click()
   })
   it('Should select a product', ()=> {
     cy.contains(' Reusable Cotton').click()
   });
})
