export default function calcTotalPrice(cart) {
  if(cart === null || cart === undefined) return 0;
  return cart.reduce( (tally, cartItem) => {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}
