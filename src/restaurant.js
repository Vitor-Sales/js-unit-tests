/* eslint-disable max-len */
// Siga as orientações do README!

;
//  const fetchMenu = (object) => {
//      return object;
// };

const createMenu = (obj) => {
    const newObject = { 
        fetchMenu: () => obj,
        consumption: [],
        order: (product) => {
            const foodArr = Object.keys(obj.food);
            const drinksArr = Object.keys(obj.drinks);
            for (let index = 0; index < foodArr.length; index += 1) {
                if (product === foodArr[index]) {
                    newObject.consumption.push(product);
                    break;
                }
            }
            for (let index = 0; index < drinksArr.length; index += 1) {
                if (product === drinksArr[index]) {
                    newObject.consumption.push(product);
                    break;
                }
            }
            return 'Item indisponível';
        },
        pay: () => {
            let totalValue = 0;
            const foodArr = Object.keys(obj.food);
            const drinksArr = Object.keys(obj.drinks);
            for (let index = 0; index < newObject.consumption.length; index += 1) {
                if (foodArr.includes(newObject.consumption[index])) {
                    totalValue += Number(obj.food[newObject.consumption[index]]);
                }
                if (drinksArr.includes(newObject.consumption[index])) {
                    totalValue += Number(obj.drinks[newObject.consumption[index]]);
                }
            }
            totalValue *= 1.1;
            // return totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            return totalValue.toFixed(2);
        },
    };
    return newObject;
};
const objetoRetornadoCreateMenu = createMenu(
    {food: {coxinha: 3.90, sanduiche: 9.90},
    drinks: {agua: 3.90, cerveja: 6.90}});

    objetoRetornadoCreateMenu.order('sanduiche');
    objetoRetornadoCreateMenu.order('agua');
    console.log(objetoRetornadoCreateMenu.pay());
module.exports = createMenu;