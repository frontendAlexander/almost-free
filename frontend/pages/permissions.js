import IsAuth from '../components/hoc/IsAuth';
import Permissions from '../components/Permissions';

const PermissionPage = props => (
  <div>
    <IsAuth>
      <Permissions />
    </IsAuth>
  </div>
);

export default PermissionPage;
