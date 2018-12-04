import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import User from './User';
import Button from './reuseStyles/Button';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/sum';
import formatMoney from '../lib/formattingMoney';
import styled from 'styled-components';
import Payment from './Payment';
import CartCounter from './CartCounter';

const CartStyle = styled.div`
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${props => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid ${props => props.theme.black};
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double ${props => props.theme.black};
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;
const CartCounterStyle = styled.div`
  
`
const Close = styled.button`
    background: black;
    color: white;
    font-size: 3rem;
    border: 0;
    position: absolute;
    z-index: 2;
    right: 0;
`;
const CartIcon = styled.span`
  background: ${props => props.theme.red};
  color: white;
  display: inline-block;
  padding: 4px 5px;
  transform: skew(-3deg);
  margin: 0;
  font-size: 4rem;
`;
const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;
const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;
const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>,
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
});
const Cart = () => (
  <Composed>
    {( { user, toggleCart, localState } ) => {
      const me = user ? user.data.me : null;
      //const cartCount = user.data.me.cart[0].quantity;
      const count = !me ? 0 : me.cart[0].quantity;
      
      if (!me) return null;
      return (
        <div>
        <CartCounterStyle role="button" onClick={toggleCart}>
          <CartCounter count={count}/>
        </CartCounterStyle>
        <CartStyle open={localState.data.cartOpen}>
          <header>
            <Close onClick={toggleCart} title="закрыть">
              &times;
            </Close>
            <CartIcon>{me.name} Корзина</CartIcon>
            <p>
              У вас {me.cart.length} наименовани {me.cart.length === 1 ? 'я' : 'й'} в корзине.
            </p>
          </header>
          <ul>{me.cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}</ul>
          <footer>
            <p>{formatMoney(calcTotalPrice(me.cart))}</p>
            {me.cart.length && (
              <Payment>
                <Button>Купить</Button>
              </Payment>
              )}
          </footer>
        </CartStyle>
        </div>
      );
    }}
  </Composed>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
