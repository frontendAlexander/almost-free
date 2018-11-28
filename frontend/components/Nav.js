import Link from 'next/link';
import styled from 'styled-components';
import User from './User';
import SignOut from './Signout';

const Navigation = styled.div`
	margin: 0;
	border: 1px solid black;
	transform: skew(-7deg);
	  padding: 0;
	  display: flex;
	  justify-self: center;
	  font-size: 2rem;
	  a,
	  button {
	    padding: 1rem 3rem;
	    display: flex;
	    align-items: center;
	    position: relative;
	    text-transform: uppercase;
	    font-weight: 900;
	    font-size: 1em;
	    background: none;
	    border: 0;
	    cursor: pointer;
	    color: ${props => props.theme.black};
	    font-weight: 800;
	    @media (max-width: 700px) {
	      font-size: 10px;
	      padding: 0 10px;
	    }
`
const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <Navigation data-test="nav">
        <Link href="/items">
          <a>Магазин</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
              <a>Продать</a>
            </Link>
            <Link href="/orders">
              <a>Заказы</a>
            </Link>
            <Link href="/me">
              <a>Личный кабинет</a>
            </Link>
            <SignOut/>
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Войти</a>
          </Link>

        )}
      </Navigation>
    )}
  </User>
);

export default Nav;
