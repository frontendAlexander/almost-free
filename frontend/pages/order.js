import IsAuth from '../components/hoc/IsAuth';
import Order from '../components/Order';

const OrderPage = props => (
  <div>
    <IsAuth>
      <Order id={props.query.id} />
    </IsAuth>
  </div>
);

export default OrderPage;
