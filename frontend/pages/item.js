import SingleItem from '../components/SingleItem';

const Item = (props) => {
	return (
			<div className="">
				<SingleItem id={props.query.id} />
			</div>
		)
}

export default Item;
