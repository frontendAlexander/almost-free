import IsAuth from '../components/hoc/IsAuth';
import Permissions from '../components/Permissions';

const PermissionsPage = props => (
  <div>
    <IsAuth>
      <Permissions />
    </IsAuth>
  </div>
);

export default PermissionsPage;
