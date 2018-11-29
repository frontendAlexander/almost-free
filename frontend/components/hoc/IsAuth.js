import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../User';
import Signin from '../Signin';

const IsAuth = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Загрузка...</p>;
      if (!data.me) {
        return (
          <div>
            <p>Пожалуйста войдите в личный кабинет чтобы продолжить</p>
            <Signin />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default IsAuth;
