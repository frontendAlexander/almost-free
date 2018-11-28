import Reset from '../components/ResponseResetPassword';

const Sell = props => (
  <div>
    <p>Сброс пароля {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default Sell;
