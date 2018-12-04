import IsAuth from '../components/hoc/IsAuth';

const Me = props => (
  <div>
    <IsAuth>
    	<div className="">
    		me
    	</div>
    </IsAuth>
  </div>
);

export default Me;
