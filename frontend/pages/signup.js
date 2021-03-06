import Signup from '../components/Signup';
import Signin from '../components/Signin';
import ResetPassword from '../components/RequestResetPassword';
import styled from 'styled-components';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`; 

const SignupPage = (props) => {
	return (
			<Columns>
					<Signup />
					<Signin/>
					<ResetPassword/>
			</Columns>
		)
}

export default SignupPage;
