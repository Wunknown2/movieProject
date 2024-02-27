// функция для получения данных из хранилища под ключом cart
export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};
// функция для подсчета суммы всех товаров
export const calcTotalPrice = (movies) => {
  const totalPrice = movies.reduce((acc, curr) => acc + curr.subPrice, 0);
  return totalPrice;
};
// функция для подсчета всех товаров в корзине
export const getProductsCountInCart = () => {
  let cart = getLocalStorage();
  return cart && cart.movies ? cart.movies.length : 0;
};
//функция для подсчета стоимости за одну позицию
export const calcSubPrice = (elem) => {
  return elem.item.price * elem.count;
};
