/* eslint-disable max-len */
// Siga as orientações do README!

const fetchMenu = () => ({ food: {}, drinks: {} });
// const fetchMenu = () => {
//     return { food: {}, drinks: {} };
// };

const createMenu = (obj) => ({ fetchMenu });

console.log(createMenu().fetchMenu());
module.exports = createMenu;
