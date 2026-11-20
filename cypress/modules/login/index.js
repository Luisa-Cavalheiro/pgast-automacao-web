function preencherLogin(email, senha) {
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(senha)

  cy.get('[data-qa="login-button"]').click()
}

function verificarSeLoginFoiEfetuadoComSucesso(name){

    cy.get('.navbar-nav li')
      .contains(name)
}

module.exports = {
 preencherLogin,
 verificarSeLoginFoiEfetuadoComSucesso
}