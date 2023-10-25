const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  const objetoRetornadoCreateMenu = createMenu(
    {food: {coxinha: 3.90, sanduiche: 9.90},
    drinks: {agua: 3.90, cerveja: 6.90}});
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
  });
  it('1 - Escreva dois testes, um que verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu e outro verificando se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função.', () =>{
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');
  });
  it('2 - Escreva um teste que verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks.', () => {
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu()).length).toBe(2);
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toHaveProperty('food');
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toHaveProperty('drinks');
  });
  it('3 - Escreva um teste que verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().', () => {
    expect({ food: {}, drinks: {} }).toEqual(createMenu({ food: {}, drinks: {} }).fetchMenu());
  });
  it('5 - Escreva um teste que verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio.', () => {
    expect(createMenu({ food: {}, drinks: {} }).consumption.length).toBe(0);
  });
  it('7 - ', () => {
    expect(objetoRetornadoCreateMenu.order('picanha')).toBe("Item indisponível");
    objetoRetornadoCreateMenu.order('coxinha');
    expect(objetoRetornadoCreateMenu.consumption).toContain('coxinha');
  });
  it('9- Escreva um teste que verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos.', () => {
    // Já havia acrescentado uma coxinha no item anterior
    objetoRetornadoCreateMenu.order('cerveja');
    objetoRetornadoCreateMenu.order('agua');
    expect(objetoRetornadoCreateMenu.consumption).toEqual(['coxinha', 'cerveja', 'agua']);
  });
  it('10 - Escreva um teste que verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
    // Estou aproveitando os itens que já haviam sido incluidos antes
    objetoRetornadoCreateMenu.order('agua');
    expect(objetoRetornadoCreateMenu.consumption).toEqual(['coxinha', 'cerveja', 'agua', 'agua']);
  });
  it('11 - Escreva um teste que verifica que, ao chamar a função pay() que será uma propriedade do objeto retornado pela função createMenu, deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption. A propriedade pay tem como valor uma função.', () => {
    expect(typeof objetoRetornadoCreateMenu.pay).toBe('function');
    expect(objetoRetornadoCreateMenu.pay()).toBe("20.46");
  });
});
