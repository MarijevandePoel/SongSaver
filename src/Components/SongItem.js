import React from "react";
import { useDispatch } from "react-redux";
import { deleteSong } from "../redux/songSlice";

const SongItem = ({ id, title, artist, genre, rating }) => {
	const dispatch = useDispatch();

	const handleDeleteClick = () => {
		dispatch(deleteSong({ id: id }));
	};
	return (
		<>
			<tr key={id} className="songRow">
				<td>{title}</td>
				<td>{artist}</td>
				<td>{genre}</td>
				<td>{rating}</td>
				<td>
					<button
						className="delete"
						id={id}
						onClick={() => handleDeleteClick(id)}
					>
						delete
					</button>
				</td>
			</tr>
		</>
	);
};

export default SongItem;
