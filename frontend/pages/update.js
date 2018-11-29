import Update from '../components/UpdateItem';

const UpdatePage = ({ query }) => {
	return (
			<div className="">
				<Update id={query.id} />
			</div>
		)
}

export default UpdatePage;
