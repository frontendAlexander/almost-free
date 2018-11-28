import Items from '../components/Items';

const Home = (props) => {
	return (
			<div className="">
				<Items page={parseFloat(props.query.page) || 1} />
			</div>
		)
}

export default Home;
