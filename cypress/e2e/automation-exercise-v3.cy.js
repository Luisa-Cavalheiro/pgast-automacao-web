/// <reference types="cypress" />

const cadastro = require('../modules/cadastro/index')
const login = require('../modules/login/index')
const produtos = require('../modules/produtos/index')

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

    login.preencherLogin('pgats-aut-test-1795215430042@mail.com', '12345')

    login.verificarSeLoginFoiEfetuadoComSucesso()

  });

  it('CT 3 - Efetuar Login de Usuário email e senha INCORRETOS', () => {
    var senhaIncorreta = '54321';

    cy.visit('/login')

    login.preencherLogin('pgats-aut-test-1791030872114@mail.com', senhaIncorreta)
   
    login.verificarSeMensagemDeErroFoiExibidaNoLogin()
    
  });

  it('CT 4 - Efetuar Logout', () => {
    cy.visit('/login')

    login.preencherLogin('pgats-aut-test-1791030872114@mail.com', '12345')

    login.efetuarLogout()
  
    login.verificarSeOUsuarioFoiDeslogado()

  });

  it('CT 5 - Tentar cadastrar usuário com e-mail já cadastrado', () => {
    cy.visit('/')
    cy.get('a[href*=login]').click()

    cadastro.iniciarCadastro('PGATS Aut', `pgats-aut-test-1791030872114@mail.com`)

    cadastro.verificarSeMensagemDeCadastroExistenteFoiExibida()

  });

  it('CT 8 - Verificar página de produtos e detalhes de um produto', () => {
    cy.visit('/')

    produtos.acessarProdutos()

    produtos.clicarEmProduto()
  
    produtos.verificarDetalhesDeProduto('/product_details/1')

  });

   it('CT 9 - Buscar produto', () => {
      cy.visit('/')

    produtos.acessarProdutos()

    produtos.buscarProduto('top for women', '/products?search=top%20for%20women')

    produtos.verificarProdutos()

  });

   it('CT 10', () => {

  });

   it('CT 15', () => {

  });

   it('CT 16', () => {

  });

});