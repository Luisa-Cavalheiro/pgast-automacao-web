function preencherLogin(email, senha) {
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(senha)

  cy.get('[data-qa="login-button"]').click()
}

function verificarSeLoginFoiEfetuadoComSucesso(name){

    cy.get('.navbar-nav li')
      .contains(name)
}

function verificarSeMensagemDeErroFoiExibidaNoLogin(){
cy.get('form[action*="login"] > p')
      .should('exist')
      .should('be.visible')
      .should('contain', 'Your email or password is incorrect!')
      .and('contain.text', 'Your email or password is incorrect!')
}

module.exports = {
 preencherLogin,
 verificarSeLoginFoiEfetuadoComSucesso,
 verificarSeMensagemDeErroFoiExibidaNoLogin
}