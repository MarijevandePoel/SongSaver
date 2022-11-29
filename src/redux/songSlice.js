import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
	name: "songs",
	initialState: [
		{
			id: 1,
			title: "Angels",
			artist: "Robbie Williams",
			genre: "Pop",
			rating: "5",
		},
		{
			id: 2,
			title: "Always",
			artist: "Bon Jovi",
			genre: "Rock",
			rating: "4",
		},
		{
			id: 3,
			title: "Everything I do",
			artist: "Bryan Adams",
			genre: "Rock",
			rating: "4",
		},
	],
	reducers: {
		addSongs: (state, action) => {
			const newSong = {
				id: action.payload.id + action.payload.id + 1,
				title: action.payload.title,
				artist: action.payload.artist,
				genre: action.payload.genre,
				rating: action.payload.rating,
			};
			state.push(newSong);
		},

		deleteSong: (songs, action) => {
			const newSongs = [...songs];

			return newSongs.filter((songs) => songs.id !== action.payload.id);
		},
	},
});

export const { addSongs, deleteSong } = songSlice.actions;

export default songSlice.reducer;
