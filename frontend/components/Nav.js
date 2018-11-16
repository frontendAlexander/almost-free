import Link from 'next/link';
import styled from 'styled-components';

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

const Nav = () => {
    return (
    	<Navigation>
    		<Link href="/"><a>Домашняя страница</a></Link>
	        <Link href="/sell"><a>Продать</a></Link>
	    </Navigation>
    );
};

export default Nav;
