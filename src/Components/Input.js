import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSongs } from "../redux/songSlice";

const Input = () => {
	const [songs, setSongs] = useState("");

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
			addSongs({
				id: Date.now(),
				title: songs.title,
				artist: songs.artist,
				genre: songs.genre,
				rating: songs.rating,
			})
		);
	};

	const onChange = (event) => {
		const inputName = event.target.getAttribute("name");
		const inputValue = event.target.value;
		const newSong = { ...songs };
		newSong[inputName] = inputValue;
		setSongs(newSong);
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					placeholder="title"
					name="title"
					onChange={onChange}
				/>
				<input
					type="text"
					placeholder="Artist"
					name="artist"
					onChange={onChange}
				/>
				<select value={songs.genre} onChange={onChange} name="genre">
					<option value="none">please choose a genre</option>
					<option value="Rock">Rock </option>
					<option value="Pop">Pop </option>
					<option value="R&B">R&B </option>
					<option value="Rap">Rap</option>
					<option value="Latin">Latin</option>
					<option value="Soundtrack">Soundtrack</option>
				</select>
				<select value={songs.rating} onChange={onChange} name="rating">
					<option value="none">Please choose a rating</option>
					<option value="5">5</option>
					<option value="4">4</option>
					<option value="3">3</option>
					<option value="2">2</option>
					<option value="1">1</option>
				</select>

				<input
					type="submit"
					value="Add Song"
					className="submit"
					onSubmit={onSubmit}
				/>
			</form>
		</div>
	);
};

export default Input;
