import React from "react";

import SongItem from "./SongItem";

import { useSelector } from "react-redux";

const List = () => {
	const songs = useSelector((state) => state.songs);
	return (
		<div>
			<table style={{ width: "100%" }}>
				<thead>
					<tr className="song-header">
						<th className="song-row__item">Song</th>
						<th className="song-row__item">Artist</th>
						<th className="song-row__item">Genre</th>
						<th className="song-row__item">Rating</th>
					</tr>
				</thead>
				<tbody>
					{songs.map((songs) => (
						<SongItem
							key={songs.id}
							title={songs.title}
							artist={songs.artist}
							genre={songs.genre}
							rating={songs.rating}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default List;
