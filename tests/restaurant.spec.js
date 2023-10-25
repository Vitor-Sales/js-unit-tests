const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    // 1
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');
    // 2
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu()).length).toBe(2);
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu())
  });
});
