/// <reference types="cypress" />

const cadastro = require('../modules/cadastro/index')

describe('Automation Exercise', () => {

  it('CT 1 - Cadastrar um novo usuário com sucesso', () => {
    cy.visit('/')
    cy.get('a[href*=login]').click()

    cadastro.iniciarCadastro('PGATS Aut', `pgats-aut-test-${Date.now()}@mail.com`)

    cadastro.preencherCadastro()
  
    cadastro.verificarSeCadastroFoiEfetuadoComSucesso()

  });

  it('CT 2 - Efetuar Login de Usuário com email e senha corretos', () => {

    cy.visit('/login')

    preencherLogin('pgats-aut-test-1791030872114@mail.com', '12345')

    verificarSeLoginFoiEfetuadoComSucesso()

  });

  it('CT 3 - Efetuar Login de Usuário email e senha INCORRETOS', () => {
    cy.visit('/login')

    preencherLogin('pgats-aut-test-1791030872114@mail.com', '54321')
   
    verificarSeMensagemDeErroFoiExibidaNoLogin()
    
  });

  it('CT 4 - Efetuar Logout', () => {
    cy.visit('/login')

    preencherLogin('pgats-aut-test-1791030872114@mail.com', '12345')

    efetuarLogout()
  
    verificarSeOUsuarioFoiDeslogado()

  });

  it('CT 5 - Tentar cadastrar usuário com e-mail já cadastrado', () => {
    cy.visit('/')
    cy.get('a[href*=login]').click()

    cadastro.iniciarCadastro('PGATS Aut', `pgats-aut-test-1791030872114@mail.com`)

    cadastro.verificarSeMensagemDeCadastroExistenteFoiExibida()

  });

});