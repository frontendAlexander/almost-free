import IsAuth from '../components/hoc/IsAuth';
import OrderList from '../components/OrderList';

const OrderPage = props => (
  <div>
    <IsAuth>
      <OrderList />
    </IsAuth>
  </div>
);

export default OrderPage;
